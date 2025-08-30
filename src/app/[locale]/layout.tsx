import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import ThemeToggle from '@/components/ThemeToggle';
import { Header } from "@/components/Header";
import { LocaleSwitch } from '@/components/LocaleSwitch';

type Params = Promise<{ locale: string }>

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Params
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider>
      <Header />
      <main className=" min-h-screen">
        <LocaleSwitch />
        {children}
        <ThemeToggle />
      </main>
    </NextIntlClientProvider>
  )
}