"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import {
  contactSchema,
  type ContactFormData,
} from "@/lib/validation";

export function ContactForm() {
  const t = useTranslations("Form");

  const [success, setSuccess] =
    useState(false);

  const [serverError, setServerError] =
    useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (
    data: ContactFormData,
  ) => {
    setSuccess(false);
    setServerError(null);

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.message ??
            t("error"),
        );
      }

      setSuccess(true);
      reset();
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : t("error"),
      );
    }
  };

  return (
    <Card>
      <div className="mb-7">
        <h3 className="text-xl font-bold text-text-primary">
          {t("contactTitle")}
        </h3>

        <p className="mt-2 text-sm leading-7 text-text-secondary">
          {t("contactDescription")}
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="space-y-5"
      >
        {/* Name */}
        <Input
          label={t("name")}
          placeholder={t("namePlaceholder")}
          autoComplete="name"
          {...register("name")}
          error={errors.name?.message}
        />

        {/* Email */}
        <Input
          type="email"
          label={t("email")}
          placeholder={t("emailPlaceholder")}
          autoComplete="email"
          {...register("email")}
          error={errors.email?.message}
        />

        {/* Subject */}
        <Input
          label={t("subject")}
          placeholder={t("subjectPlaceholder")}
          {...register("subject")}
          error={errors.subject?.message}
        />

        {/* Message */}
        <Textarea
          label={t("message")}
          placeholder={t("messagePlaceholder")}
          {...register("message")}
          error={errors.message?.message}
        />

        {/* Success */}
        {success ? (
          <div
            role="status"
            className="rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm font-medium text-green-600 dark:text-green-400"
          >
            {t("success")}
          </div>
        ) : null}

        {/* Error */}
        {serverError ? (
          <div
            role="alert"
            className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm font-medium text-red-600 dark:text-red-400"
          >
            {serverError}
          </div>
        ) : null}

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          fullWidth
          loading={isSubmitting}
        >
          <Send
            size={18}
            aria-hidden="true"
          />

          {isSubmitting
            ? t("sending")
            : t("send")}
        </Button>
      </form>
    </Card>
  );
}