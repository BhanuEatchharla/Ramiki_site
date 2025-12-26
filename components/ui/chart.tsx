"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

/* ----------------------------------------
   THEMES
---------------------------------------- */

const THEMES = {
  light: "",
  dark: ".dark",
} as const;

/* ----------------------------------------
   TYPES
---------------------------------------- */

export type ChartConfig = {
  [key: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart(): ChartContextProps {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}

/* ----------------------------------------
   CHART CONTAINER
---------------------------------------- */

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & {
    config: ChartConfig;
    children: React.ReactNode;
  }
>(({ id, className, children, config, ...props }, ref) => {
  const reactId = React.useId();
  const chartId = `chart-${id ?? reactId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        ref={ref}
        data-chart={chartId}
        className={cn("flex aspect-video justify-center text-xs", className)}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "ChartContainer";

/* ----------------------------------------
   CHART STYLE
---------------------------------------- */

type ChartStyleProps = {
  id: string;
  config: ChartConfig;
};

const ChartStyle = ({ id, config }: ChartStyleProps) => {
  const colorConfig = Object.entries(config).filter(
    ([_, c]) => Boolean(c.color || c.theme)
  );

  if (!colorConfig.length) return null;

  const css = Object.entries(THEMES)
    .map(([theme, prefix]) => {
      const vars = colorConfig
        .map(([key, item]) => {
          const color =
            item.theme?.[theme as keyof typeof item.theme] ?? item.color;
          return color ? `  --color-${key}: ${color};` : null;
        })
        .filter(Boolean)
        .join("\n");

      return `
${prefix} [data-chart="${id}"] {
${vars}
}
`;
    })
    .join("\n");

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
};

/* ----------------------------------------
   TOOLTIP
---------------------------------------- */

const ChartTooltip = RechartsPrimitive.Tooltip;

type TooltipPayloadItem = {
  name?: string;
  value?: number | string;
  color?: string;
  dataKey?: string;
};

type ChartTooltipContentProps = {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
  labelFormatter?: (label: string, payload: TooltipPayloadItem[]) => React.ReactNode;
  formatter?: (
    value: number | string | undefined,
    name?: string,
    item?: TooltipPayloadItem,
    index?: number
  ) => React.ReactNode;
  className?: string;
};

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  ChartTooltipContentProps
>(
  (
    {
      active,
      payload,
      className,
      label,
      labelFormatter,
      formatter,
    },
    ref
  ) => {
    const { config } = useChart();

    if (!active || !payload || payload.length === 0) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border border-border bg-background px-3 py-2 text-xs shadow-xl",
          className
        )}
      >
        {label && (
          <div className="mb-1 font-medium">
            {labelFormatter ? labelFormatter(label, payload) : label}
          </div>
        )}

        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = item.dataKey ?? item.name ?? String(index);
            const itemConfig = config[key];

            return (
              <div
                key={index}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-sm"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-muted-foreground">
                    {itemConfig?.label ?? item.name}
                  </span>
                </div>
                <span className="font-mono font-medium tabular-nums">
                  {formatter
                    ? formatter(item.value, item.name, item, index)
                    : item.value?.toLocaleString?.()}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltipContent";

/* ----------------------------------------
   LEGEND
---------------------------------------- */

const ChartLegend = RechartsPrimitive.Legend;

type LegendPayloadItem = {
  dataKey?: string;
  value?: string;
  color?: string;
};

type ChartLegendContentProps = {
  payload?: LegendPayloadItem[];
  className?: string;
};

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  ChartLegendContentProps
>(({ payload, className }, ref) => {
  const { config } = useChart();

  if (!payload || payload.length === 0) return null;

  return (
    <div
      ref={ref}
      className={cn("flex flex-wrap justify-center gap-4", className)}
    >
      {payload.map((item, index) => {
        const itemConfig = item.dataKey ? config[item.dataKey] : undefined;

        return (
          <div key={index} className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-sm"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm">
              {itemConfig?.label ?? item.value}
            </span>
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegendContent";

/* ----------------------------------------
   EXPORTS
---------------------------------------- */

export {
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
};
