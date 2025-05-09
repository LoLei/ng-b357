import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  imports: [CommonModule],
})
export class PricingComponent {
  pricingPlans = [
    {
      tier: 'Basic',
      price: '$10/month',
      features: ['Access to basic tutorials', 'Community support', '1 project slot'],
    },
    {
      tier: 'Pro',
      price: '$20/month',
      features: ['Access to all tutorials', 'Priority support', '5 project slots', 'Exclusive webinars'],
    },
    {
      tier: 'Enterprise',
      price: '$50/month',
      features: ['Dedicated account manager', 'Custom solutions', 'Unlimited project slots', 'On-site training'],
    },
  ];

  trackByIndex(index: number, item: { tier: string; price: string; features: string[] }): number {
    return index;
  }

  trackByFeature(index: number, feature: string): number {
    return index;
  }
}
