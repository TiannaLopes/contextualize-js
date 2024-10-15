# contextualize-js

A context-aware feature flag system for JavaScript, allowing you to enable or disable features based on user roles, location, and time.

## Features

- **Role-based feature flags**: Enable or disable features for specific user roles.
- **Location-aware flags**: Toggle features based on the user’s location.
- **Time-sensitive flags**: Automatically enable/disable features at specified times.
- **Persistent storage**: Uses localStorage and cookies to remember feature states.
- **Fallback to in-memory storage**: Works even if localStorage is unavailable.

## Installation

To install the package, run:

```bash
npm install contextualize-js
```

## Example Usage 
```bash
import FeatureFlag from 'contextualize-js';

const featureFlag = new FeatureFlag();

// Enable a feature for admins, expiring on December 31, 2024
featureFlag.enable('dark-mode', { role: 'admin', time: '2024-12-31T23:59:59Z' });

// Check if the feature is enabled
console.log('Is dark mode enabled?', featureFlag.isEnabled('dark-mode')); // true

// Disable the feature
featureFlag.disable('dark-mode');
console.log('Is dark mode enabled?', featureFlag.isEnabled('dark-mode')); // false
```