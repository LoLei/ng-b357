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
    { tier: 'Basic', price: '$10/month', features: ['Feature 1', 'Feature 2'] },
    { tier: 'Pro', price: '$20/month', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { tier: 'Enterprise', price: '$50/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
  ];

  trackByIndex(index: number, item: { tier: string; price: string; features: string[] }): number {
    return index;
  }

  trackByFeature(index: number, feature: string): number {
    return index;
  }
}
