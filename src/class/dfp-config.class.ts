import { InjectionToken } from '@angular/core';

export class DfpTargeting {
  [key: string]: Array<string>;
}

export class DfpConfig {
  idleLoad?: boolean;
  onSameNavigation?: 'refresh' | 'ignore';
  singleRequestMode?: boolean;
  collapseIfEmpty?: boolean;
  centering?: boolean;
  location?: string | Array<string>;
  ppid?: string;
  globalTargeting?: DfpTargeting;
  forceSafeFrame?: boolean;
  safeFrameConfig?: object;
  loadGPT?: boolean;
}

export const DFP_CONFIG = new InjectionToken<DfpConfig>('dfpConfig');
