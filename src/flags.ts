import { isBefore } from 'date-fns';
import { storage } from './storage';

export type FlagContext = {
    role?: string;
    location?: string;
    time?: string; // Expiry in ISO format
};

export class FeatureFlag {
    private flags: { [key: string]: FlagContext } = {};

    constructor(initialFlags: { [key: string]: FlagContext } = {}) {
        this.flags = initialFlags;
    }

    enable(flag: string, context: FlagContext) {
        this.flags[flag] = context;
        storage.setItem(flag, JSON.stringify(context)); // Use setItem
    }

    disable(flag: string) {
        delete this.flags[flag];
        storage.removeItem(flag);
    }

    isEnabled(flag: string): boolean {
        const context = this.flags[flag] || JSON.parse(storage.getItem(flag) || '{}'); // Use getItem
        if (context?.time && isBefore(new Date(), new Date(context.time))) {
            return false;
        }
        return true;
    }

    getFlags() {
        return this.flags;
    }
}
