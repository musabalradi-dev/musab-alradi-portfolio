"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export function Modal({
  open,
  onClose,
  title,
  children,
}: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl border border-border bg-surface p-6 shadow-2xl"
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >
        <div className="mb-6 flex items-center justify-between gap-4">
          {title ? (
            <h2 className="text-xl font-bold text-text-primary">
              {title}
            </h2>
          ) : (
            <span />
          )}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-2 text-text-secondary transition hover:bg-surface-secondary hover:text-text-primary"
          >
            <X size={20} />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}