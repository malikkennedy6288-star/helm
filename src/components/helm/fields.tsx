import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { NativeSelect } from "@/components/ui/native-select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { FieldDef, Settings } from "@/lib/control";

export function SettingRow({
  field,
  value,
  disabled,
  onChange,
}: {
  field: FieldDef;
  value: Settings[keyof Settings];
  disabled: boolean;
  onChange: (value: Settings[keyof Settings]) => void;
}) {
  return (
    <div
      className={cn(
        "grid gap-3 border-b border-border py-[var(--row-pad,16px)] last:border-b-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,16rem)] sm:items-center",
        disabled && "opacity-60",
      )}
    >
      <div className="min-w-0">
        <Label htmlFor={field.key} className="text-[15px]">
          {field.label}
        </Label>
        <p className="mt-1 text-sm text-muted">{field.description}</p>
      </div>
      <div className="sm:justify-self-end sm:w-full">
        <FieldControl field={field} value={value} disabled={disabled} onChange={onChange} />
      </div>
    </div>
  );
}

function FieldControl({
  field,
  value,
  disabled,
  onChange,
}: {
  field: FieldDef;
  value: Settings[keyof Settings];
  disabled: boolean;
  onChange: (value: Settings[keyof Settings]) => void;
}) {
  if (field.type === "toggle") {
    return (
      <div className="flex h-11 items-center justify-end">
        <Switch
          id={field.key}
          checked={Boolean(value)}
          disabled={disabled}
          onCheckedChange={(c) => onChange(c)}
        />
      </div>
    );
  }

  if (field.type === "text") {
    return (
      <Input
        id={field.key}
        value={String(value ?? "")}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }

  if (field.type === "textarea") {
    return (
      <Textarea
        id={field.key}
        value={String(value ?? "")}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className="sm:w-full"
      />
    );
  }

  if (field.type === "select") {
    return (
      <NativeSelect
        id={field.key}
        value={String(value ?? "")}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      >
        {field.options?.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </NativeSelect>
    );
  }

  if (field.type === "slider") {
    const n = typeof value === "number" ? value : Number(value);
    return (
      <div className="flex items-center gap-3">
        <Slider
          min={field.min}
          max={field.max}
          step={field.step}
          value={[n]}
          disabled={disabled}
          onValueChange={([v]) => onChange(v ?? n)}
          className="flex-1"
        />
        <span className="w-14 text-right text-sm tabular text-muted">
          {n}
          {field.suffix ? ` ${field.suffix}` : ""}
        </span>
      </div>
    );
  }

  if (field.type === "segmented") {
    return (
      <div className="flex rounded-lg bg-raised p-1 shadow-[var(--shadow-border)]">
        {field.options?.map((o) => {
          const active = String(value) === o.value;
          return (
            <button
              key={o.value}
              type="button"
              disabled={disabled}
              onClick={() => onChange(o.value)}
              className={cn(
                "h-9 flex-1 rounded-md px-2 text-[13px] font-medium transition-[background-color,color,opacity] duration-150",
                active ? "bg-accent text-accent-fg" : "text-muted hover:text-fg",
              )}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    );
  }

  return null;
}

export function FieldList({
  fields,
  settings,
  disabled,
  onChange,
}: {
  fields: FieldDef[];
  settings: Settings;
  disabled: boolean;
  onChange: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
}) {
  return (
    <div className="rounded-2xl bg-surface px-5 shadow-[var(--shadow-border)]">
      {fields.map((field) => (
        <SettingRow
          key={field.key}
          field={field}
          value={settings[field.key]}
          disabled={disabled}
          onChange={(v) => onChange(field.key, v as Settings[typeof field.key])}
        />
      ))}
    </div>
  );
}

export function AccessBanner({ access }: { access: "none" | "read" | "write" }) {
  if (access === "write") return null;
  return (
    <div className="rounded-xl bg-raised px-4 py-3 text-sm text-muted shadow-[var(--shadow-border)]">
      {access === "none"
        ? "You have no access to this area. Return to Root to edit without red tape."
        : "Read only. You can inspect these settings but not change them."}
    </div>
  );
}

export function Denied() {
  return (
    <div className="rounded-2xl bg-surface px-6 py-16 text-center shadow-[var(--shadow-border)]">
      <p className="text-lg font-medium tracking-tight">No access</p>
      <p className="mt-2 text-sm text-muted">
        This area is hidden from the current role. Return to Root — Root always has write.
      </p>
    </div>
  );
}
