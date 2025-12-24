"use client";

import * as React from "react";
import {
  PanelGroup,
  Panel,
  PanelResizeHandle,
} from "react-resizable-panels";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

type ResizablePanelGroupProps = React.ComponentProps<typeof PanelGroup>;

const ResizablePanelGroup = ({
  className,
  ...props
}: ResizablePanelGroupProps) => {
  return (
    <PanelGroup
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className
      )}
      {...props}
    />
  );
};

const ResizablePanel = Panel;

type ResizableHandleProps = React.ComponentProps<
  typeof PanelResizeHandle
> & {
  withHandle?: boolean;
};

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: ResizableHandleProps) => {
  return (
    <PanelResizeHandle
      className={cn(
        "relative flex w-px items-center justify-center bg-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-background">
          <GripVertical className="h-2.5 w-2.5 text-muted-foreground" />
        </div>
      )}
    </PanelResizeHandle>
  );
};

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
