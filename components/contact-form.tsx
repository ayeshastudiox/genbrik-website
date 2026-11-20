'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { AlertCircle, Check } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import type { Resolver } from 'react-hook-form'
import { MetalSheen, buttonClassName } from '@/components/ui/button'
import {
  contactSchema,
  focusLabels,
  focusValues,
  type ContactApiError,
  type ContactApiResponse,
  type ContactFormValues,
} from '@/lib/validation'
import { cn } from '@/lib/utils'

type Status = 'idle' | 'submitting' | 'success' | 'error'

function messageFor(error: ContactApiError | 'network'): string {
  switch (error) {
    case 'rate_limited':
      return 'You have sent a few messages already. Please try again in a few minutes, or email info@genbrik.com.'
    case 'validation':
      return 'Some details need checking. Please review the fields above and try again.'
    case 'not_configured':
      return 'Email delivery is not configured on this environment yet. Please email info@genbrik.com directly and we will pick it up from there.'
    case 'network':
      return 'We could not reach the server. Check your connection and try again, or email info@genbrik.com.'
    default:
      return 'Something went wrong while sending your message. Nothing was lost — you can retry, or email info@genbrik.com directly.'
  }
}

const inputBase =
  'mt-2 w-full rounded-btn border bg-paper px-3.5 py-3 text-[16px] text-slate transition-colors placeholder:text-slate-muted/60 focus:border-slate focus:bg-white sm:text-[14.5px]'

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} role="alert" className="mt-1.5 text-[12.5px] leading-snug text-danger">
      {message}
    </p>
  )
}

/**
 * Consultation request form (spec §4.6, §5.3).
 * Client validation uses the same Zod schema as the API route; the honeypot is
 * hidden from sighted and assistive-technology users and never autofilled.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const successRef = useRef<HTMLHeadingElement | null>(null)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema) as unknown as Resolver<ContactFormValues>,
    mode: 'onTouched',
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      focus: '',
      message: '',
      website: '',
    },
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = form

  useEffect(() => {
    if (status === 'success') successRef.current?.focus()
  }, [status])

  const onSubmit = handleSubmit(async (values) => {
    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      const data = (await response.json()) as ContactApiResponse

      if (!response.ok || !data.ok) {
        setStatus('error')
        setErrorMessage(messageFor(data.ok ? 'server_error' : data.error))
        return
      }

      setStatus('success')
      reset()
    } catch {
      setStatus('error')
      setErrorMessage(messageFor('network'))
    }
  })

  if (status === 'success') {
    return (
      <div className="panel-glass-light animate-fade-in relative overflow-hidden rounded-feature p-7 md:p-9">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.95),transparent)]"
        />
        <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline-light bg-paper">
          <span
            aria-hidden
            className="absolute inset-0 animate-pulse-soft rounded-full border border-slate/15"
          />
          <Check aria-hidden className="h-4 w-4 text-slate" strokeWidth={1.75} />
        </span>
        <h2
          ref={successRef}
          tabIndex={-1}
          className="mt-5 font-display text-[26px] font-medium leading-tight text-slate outline-none"
        >
          Message received.
        </h2>
        <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-slate-muted">
          Your request has reached the GENBRIK team. Here is what happens next.
        </p>
        <ol className="mt-6 space-y-3 border-t border-hairline-light pt-6">
          {[
            'We reply by email to the address you gave us.',
            'If the work looks like a fit, we arrange a short call to understand it properly.',
            'You get a written scope and next steps, or a clear no if we are not the right partner.',
          ].map((line, index) => (
            <li key={line} className="flex gap-3 text-[14px] leading-relaxed text-slate-muted">
              <span className="font-display text-[12px] tabular-nums text-slate-muted/60">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ol>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={() => {
              setStatus('idle')
              setErrorMessage('')
            }}
            className={buttonClassName({ tone: 'light', variant: 'secondary' })}
          >
            Send another message
          </button>
          <a href="mailto:info@genbrik.com" className={buttonClassName({ tone: 'light' })}>
            <MetalSheen tone="light" />
            <span className="relative">Email us directly</span>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="panel-glass-light relative overflow-hidden rounded-feature p-6 md:p-9">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.95),transparent)]"
      />
      <h2 className="font-display text-[24px] font-medium leading-tight text-slate">
        Tell us about the work
      </h2>
      <p className="mt-2 text-[13.5px] leading-relaxed text-slate-muted">
        A few sentences is enough. We will come back with questions rather than a brochure.
      </p>

      <form onSubmit={onSubmit} noValidate className="mt-7">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-[13px] font-medium text-slate">
              Name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              required
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? 'name-error' : undefined}
              placeholder="Your full name"
              className={cn(inputBase, errors.name ? 'border-danger/60' : 'border-hairline-light')}
              {...register('name')}
            />
            <FieldError id="name-error" message={errors.name?.message} />
          </div>

          <div>
            <label htmlFor="company" className="text-[13px] font-medium text-slate">
              Company <span className="font-normal text-slate-muted">(optional)</span>
            </label>
            <input
              id="company"
              type="text"
              autoComplete="organization"
              aria-invalid={errors.company ? true : undefined}
              aria-describedby={errors.company ? 'company-error' : undefined}
              placeholder="Organisation name"
              className={cn(inputBase, errors.company ? 'border-danger/60' : 'border-hairline-light')}
              {...register('company')}
            />
            <FieldError id="company-error" message={errors.company?.message} />
          </div>

          <div>
            <label htmlFor="email" className="text-[13px] font-medium text-slate">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? 'email-error' : undefined}
              placeholder="you@company.com"
              className={cn(inputBase, errors.email ? 'border-danger/60' : 'border-hairline-light')}
              {...register('email')}
            />
            <FieldError id="email-error" message={errors.email?.message} />
          </div>

          <div>
            <label htmlFor="phone" className="text-[13px] font-medium text-slate">
              Phone <span className="font-normal text-slate-muted">(optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              placeholder="With country code"
              className={cn(inputBase, errors.phone ? 'border-danger/60' : 'border-hairline-light')}
              {...register('phone')}
            />
            <FieldError id="phone-error" message={errors.phone?.message} />
          </div>
        </div>

        <fieldset className="mt-5">
          <legend className="text-[13px] font-medium text-slate">
            Which area are you interested in?
          </legend>
          <div className="mt-2.5 grid gap-2 sm:grid-cols-3">
            {focusValues.map((value) => (
              <label key={value} className="relative block cursor-pointer">
                <input
                  type="radio"
                  value={value}
                  className="peer sr-only"
                  aria-describedby={errors.focus ? 'focus-error' : undefined}
                  {...register('focus')}
                />
                <span className="flex h-full min-h-[46px] items-center justify-center rounded-btn border border-hairline-light bg-white px-3 py-2.5 text-center text-[13px] leading-snug text-slate-muted transition-colors peer-checked:border-slate peer-checked:bg-paper peer-checked:text-slate peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-slate">
                  {focusLabels[value]}
                </span>
              </label>
            ))}
          </div>
          <FieldError id="focus-error" message={errors.focus?.message} />
        </fieldset>

        <div className="mt-5">
          <label htmlFor="message" className="text-[13px] font-medium text-slate">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            required
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? 'message-error' : 'message-hint'}
            placeholder="What do you want to build? Include the systems involved if you know them."
            className={cn(
              inputBase,
              'min-h-[160px] resize-y leading-relaxed',
              errors.message ? 'border-danger/60' : 'border-hairline-light',
            )}
            {...register('message')}
          />
          {errors.message ? (
            <FieldError id="message-error" message={errors.message.message} />
          ) : (
            <p id="message-hint" className="mt-1.5 text-[12px] text-slate-muted/70">
              At least 20 characters. No confidential data, please.
            </p>
          )}
        </div>

        {/* Honeypot — hidden from people, catches naive bots. */}
        <div aria-hidden="true" className="pointer-events-none absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register('website')}
          />
        </div>

        {status === 'error' && errorMessage && (
          <div
            role="alert"
            className="mt-5 flex animate-fade-in gap-3 rounded-card border border-danger/25 bg-danger/[0.04] p-4"
          >
            <AlertCircle aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-danger" strokeWidth={1.75} />
            <p className="text-[13px] leading-relaxed text-slate-muted">{errorMessage}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          aria-busy={status === 'submitting'}
          className={buttonClassName({
            tone: 'light',
            className: 'mt-6 w-full disabled:cursor-wait disabled:opacity-70',
          })}
        >
          <MetalSheen tone="light" />
          <span className="relative">
            {status === 'submitting' ? 'Sending…' : 'Request a consultation'}
          </span>
        </button>

        <p className="mt-3 text-[12px] leading-relaxed text-slate-muted/80">
          We use these details to reply to your enquiry only. See the{' '}
          <Link href="/privacy" className="underline decoration-slate/20 underline-offset-2">
            privacy policy
          </Link>
          .
        </p>
      </form>
    </div>
  )
}
