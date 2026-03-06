'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { List } from 'lucide-react';
import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
} from '@/components/ui/drawer';
import { TableOfContents } from '@/components/table-of-contents';
import { PromoContent } from '@/components/promo-content';

const MOBILE_TOC_TRIGGER_CLASS =
    'lg:hidden fixed z-[100] rounded-full border border-border bg-primary text-primary-foreground shadow-xl transition-opacity hover:opacity-90 p-4 bottom-[calc(env(safe-area-inset-bottom)+1.5rem)] right-[calc(env(safe-area-inset-right)+1.5rem)]';

export function MobileTableOfContents() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || typeof document === 'undefined') return null;

    const drawer = (
        <Drawer>
            <DrawerTrigger className={MOBILE_TOC_TRIGGER_CLASS}>
                <List size={22} aria-label="Open table of contents" />
            </DrawerTrigger>

            <DrawerContent className="lg:hidden">
                <DrawerHeader>
                    <h3 className="font-semibold">Table of Contents</h3>
                </DrawerHeader>

                <DrawerBody>
                    <TableOfContents />
                </DrawerBody>

                <DrawerFooter>
                    <PromoContent variant="mobile" />
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );

    return createPortal(drawer, document.body);
}
