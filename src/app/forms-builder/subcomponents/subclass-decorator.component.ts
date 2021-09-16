import {Component,ChangeDetectionStrategy} from "@angular/core";

const dumbComponentArgs: Component = {
  changeDetection: ChangeDetectionStrategy.OnPush
};
export function DumbComponent(args: Component = {}): (cls: any) => void {
  const compArgs = Object.assign(dumbComponentArgs as Component,args),
    ngCompDecorator = Component(compArgs);
  return function(compType: any) {
    ngCompDecorator(compType);
  };
}
