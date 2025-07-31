import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

export interface ILayout {
  children: React.ReactNode;
}

export interface INavlink {
  href: string;
  children: React.ReactNode;
}

export interface ISocialLink extends ComponentPropsWithoutRef<typeof Link> {
  icon: React.ComponentType<{ className?: string }>
}

export interface IAvatar extends Omit<ComponentPropsWithoutRef<typeof Link>, 'href'> {
  large?: boolean
  className?: string
}