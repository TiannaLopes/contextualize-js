import { FeatureFlag } from './flags';

const featureFlag = new FeatureFlag();

featureFlag.enable('new-feature', { role: 'admin', time: '2024-12-31T23:59:59Z' });

console.log('Is new-feature enabled?', featureFlag.isEnabled('new-feature'));

export default featureFlag;
