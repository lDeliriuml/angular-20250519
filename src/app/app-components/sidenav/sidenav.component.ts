import {
    ChangeDetectionStrategy,
    Component,
    effect,
    ElementRef,
    input,
    TemplateRef,
    viewChild,
    ViewContainerRef,
} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';

// sidenavComponentInstance.name = bindingValue;

@Component({
    selector: 'app-sidenav',
    standalone: true,
    imports: [MatSidenavModule, MatButtonModule],
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
    readonly contentTemplate = input.required<TemplateRef<unknown>>();
    readonly contentTemplateAlternative = input.required<TemplateRef<unknown>>();
    // readonly drawerOpened = model<boolean>(false);

    // @Input() age: string | undefined;

    // @Input() set name(value: string) {

    // }

    // readonly drawerOpened = input(false);

    // readonly drawerOpenedChange = output<boolean>();

    readonly contentViewport = viewChild.required('contentViewport', {read: ViewContainerRef});
    readonly drawerComponent = viewChild.required(MatDrawer);
    // readonly drawerComponent = viewChild<MatDrawer>('drawerComponent');
    readonly drawerElement = viewChild.required(MatDrawer, {read: ElementRef});
    readonly divElement = viewChild<ElementRef<HTMLDivElement>>('divElement');

    constructor() {
        // setTimeout(() => {
        //     this.contentViewport().createEmbeddedView(this.contentTemplate());
        // }, 1000);

        // const instEffect = effect(() => {
        effect(() => {
            this.contentViewport().createEmbeddedView(this.contentTemplate());
        });

        // instEffect.destroy();
    }

    toggleDrawer() {
        // this.drawerOpenedChange.emit(!this.drawerOpened());
        // this.drawerOpened.set(!this.drawerOpened());

        // eslint-disable-next-line no-console
        console.log(this.divElement()?.nativeElement, this.drawerElement().nativeElement);
        this.drawerComponent().toggle();
    }
}
