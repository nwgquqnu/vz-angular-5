import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

import { CartCountChangedEvent } from '../../models/cart-count-changed.event';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() item: CartItem;
  @Output() itemDeleted = new EventEmitter<CartItem>();
  @Output() itemCountChanged = new EventEmitter<CartCountChangedEvent>();

  @HostBinding('class.active') active = false;

  @HostListener('mouseenter')
  onMouseEnterHandler() {
    this.active = true;
  }

  @HostListener('mouseleave')
  onMouseLeaveHandler() {
    this.active = false;
  }

  onRemoveFromCart() {
    this.itemDeleted.emit(this.item);
  }

  onQuantityChanged(event: any) {
    const quantity: number = +event.target.value;
    this.itemCountChanged.emit(new CartCountChangedEvent(this.item, quantity));
  }

}
