import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsComponent} from '@primeng-material/primeng-components/src/lib/forms/forms.component';

import {MenuComponent as MenuComponentWrapper} from './menu/menu.component';
import {MenuComponent} from './menu/menu/menu.component';
import {OverlaysComponent} from './overlays/overlays.component';
import {TreeComponent} from './tree/tree.component';
import {TreeTableComponent} from './tree-table/tree-table.component';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {AutocompleteComponent} from './forms/autocomplete/autocomplete.component';
import {SideNavComponent} from './layout/side-nav/side-nav.component';
import {SizesComponent} from './layout/sizes/sizes.component';
import {MarginsComponent} from './layout/sizes/margins/margins.component';
import {SideNavBasicComponent} from './layout/side-nav/side-nav-basic/side-nav-basic.component';
import {PaddingsComponent} from './layout/sizes/paddings/paddings.component';
import {GridleComponent} from './layout/gridle/gridle.component';
import {GridleClassesComponent} from './layout/gridle/gridle-classes/gridle-classes.component';
import {CheckboxComponent} from './forms/checkbox/checkbox.component';
import {DropdownComponent} from './forms/dropdown/dropdown.component';
import {InputSwitchComponent} from './forms/input-switch/input-switch.component';
import {InputMaskComponent} from './forms/input-mask/input-mask.component';
import {PasswordComponent} from './forms/password/password.component';
import {RatingComponent} from './forms/rating/rating.component';
import {SpinnerComponent} from './forms/spinner/spinner.component';
import {ToggleButtonComponent} from './forms/toggle-button/toggle-button.component';
import {InputComponent} from './forms/input/input.component';
import {TextareaComponent} from './forms/textarea/textarea.component';
import {CalendarComponent} from './forms/calendar/calendar.component';
import {ChipsComponent} from './forms/chips/chips.component';
import {EditorComponent} from './forms/editor/editor.component';
import {ListboxComponent} from './forms/listbox/listbox.component';
import {MultiSelectComponent} from './forms/multi-select/multi-select.component';
import {RadioButtonComponent} from './forms/radio-button/radio-button.component';
import {SliderComponent} from './forms/slider/slider.component';
import {SelectButtonComponent} from './forms/select-button/select-button.component';
import {TriStateCheckboxComponent} from './forms/tri-state-checkbox/tri-state-checkbox.component';
import {ButtonsComponent} from './forms/buttons/buttons.component';
import {MessagesComponent} from './forms/messages/messages.component';
import {ProgressBarComponent} from './forms/progress-bar/progress-bar.component';
import {PanelComponent} from './menu/panel/panel.component';
import {TieredMenuComponent} from './menu/tiered-menu/tiered-menu.component';
import {SlideMenuComponent} from './menu/slide-menu/slide-menu.component';
import {StepMenuComponent} from './menu/step-menu/step-menu.component';
import {ContextMenuComponent} from './menu/context-menu/context-menu.component';
import {BreadcrumbComponent} from './menu/breadcrumb/breadcrumb.component';
import {MenubarComponent} from './menu/menubar/menubar.component';
import {TabMenuComponent} from './menu/tab-menu/tab-menu.component';
import {MegaMenuComponent} from './menu/mega-menu/mega-menu.component';
import {AccordionComponent} from './panels/accordion/accordion.component';
import {AccordionDefaultComponent} from './panels/accordion/accordion-default/accordion-default.component';
import {AccordionCardComponent} from './panels/accordion/accordion-card/accordion-card.component';
import {AccordionMultipleComponent} from './panels/accordion/accordion-multiple/accordion-multiple.component';
import {AccordionTabChangeEventComponent} from './panels/accordion/accordion-tab-change-event/accordion-tab-change-event.component';
import {FieldsetComponent} from './panels/fieldset/fieldset.component';
import {FieldsetDefaultComponent} from './panels/fieldset/fieldset-default/fieldset-default.component';
import {FieldsetToggleableComponent} from './panels/fieldset/fieldset-toggleable/fieldset-toggleable.component';
import {PanelOnACardComponent} from './panels/panel-on-a-card/panel-on-a-card.component';
import {PanelAsACardComponent} from './panels/panel-on-a-card/panel-as-a-card/panel-as-a-card.component';
import {PanelDefaultComponent} from './panels/panel-on-a-card/panel-default/panel-default.component';
import {TabViewComponent} from './panels/tab-view/tab-view.component';
import {TabViewDefaultComponent} from './panels/tab-view/tab-view-default/tab-view-default.component';
import {TabViewClosableComponent} from './panels/tab-view/tab-view-closable/tab-view-closable.component';
import {TabViewEventComponent} from './panels/tab-view/tab-view-event/tab-view-event.component';
import {TabViewOrientationLeftComponent} from './panels/tab-view/tab-view-orientation-left/tab-view-orientation-left.component';
import {TabViewOrientationRightComponent} from './panels/tab-view/tab-view-orientation-right/tab-view-orientation-right.component';
import {TabViewOrientationBottomComponent} from './panels/tab-view/tab-view-orientation-bottom/tab-view-orientation-bottom.component';
import {ToolbarComponent} from './panels/toolbar/toolbar.component';
import {ToolbarDefaultComponent} from './panels/toolbar/toolbar-default/toolbar-default.component';
import {ToolbarStyledComponent} from './panels/toolbar/toolbar-styled/toolbar-styled.component';
import {OverlayConfirmDialogComponent} from './overlays/overlay-confirm-dialog/overlay-confirm-dialog.component';
import {OverlayDialogComponent} from './overlays/overlay-dialog/overlay-dialog.component';
import {OverlayPanelOnClickComponent} from './overlays/overlay-panel-on-click/overlay-panel-on-click.component';
import {OverlayPanelOnHoverComponent} from './overlays/overlay-panel-on-hover/overlay-panel-on-hover.component';
import {OverlayLightboxDefaultComponent} from './overlays/overlay-lightbox-default/overlay-lightbox-default.component';
import {OverlayLightboxCustomContentComponent} from './overlays/overlay-lightbox-custom-content/overlay-lightbox-custom-content.component';
import {OverlayTooltipDefaultComponent} from './overlays/overlay-tooltip-default/overlay-tooltip-default.component';
import {OverlayTooltipEventComponent} from './overlays/overlay-tooltip-event/overlay-tooltip-event.component';
import {FileUploadDefaultComponent} from './file-upload/file-upload-default/file-upload-default.component';
import {FileAutoUploadComponent} from './file-upload/file-auto-upload/file-auto-upload.component';
import {FileUploadAdvancedComponent} from './file-upload/file-upload-advanced/file-upload-advanced.component';
import {DataTableComponent} from './data/data-table/data-table.component';
import {ColumnGroupingComponent} from './data/data-table/column-grouping/column-grouping.component';
import {DataTableCustomComponent} from './data/data-table/data-table-custom/data-table-custom.component';
import {DataTableLazyComponent} from './data/data-table/data-table-lazy/data-table-lazy.component';
import {TreeLoadingComponent} from './tree/tree-loading/tree-loading.component';
import {DataTableOnCardComponent} from './data/data-table/data-table-on-card/data-table-on-card.component';
import {PlainHTMLTableComponent} from './data/plain-html-table/plain-html-table.component';
import {PlainHTMLTableDefaultComponent} from './data/plain-html-table/plain-html-table-default/plain-html-table-default.component';
import {PlainHTMLTableOnCardComponent} from './data/plain-html-table/plain-html-table-on-card/plain-html-table-on-card.component';
import {GridsComponent} from './data/grids/grids.component';
import {GridDefaultComponent} from './data/grids/grid-default/grid-default.component';
import {ListsComponent} from './data/lists/lists.component';
import {ListDefaultComponent} from './data/lists/list-default/list-default.component';
import {DataScrollersComponent} from './data/data-scrollers/data-scrollers.component';
import {DataScrollerComponent} from './data/data-scrollers/data-scroller/data-scroller.component';

import {TreeBasicComponent} from './tree/tree-basic/tree-basic.component';
import {TreeSingleSelectionComponent} from './tree/tree-single-selection/tree-single-selection.component';
import {TreeMultipleSelectionComponent} from './tree/tree-multiple-selection/tree-multiple-selection.component';
import {TreeMultipleSelectionCheckboxComponent} from './tree/tree-multiple-selection-checkbox/tree-multiple-selection-checkbox.component';
import {TreeLazyComponent} from './tree/tree-lazy/tree-lazy.component';
import {TreeContextMenuComponent} from './tree/tree-context-menu/tree-context-menu.component';
import {TreeHorizontalComponent} from './tree/tree-horizontal/tree-horizontal.component';
import {TreeProgramaticExpansionComponent} from './tree/tree-programatic-expansion/tree-programatic-expansion.component';
import {TreeTemplateComponent} from './tree/tree-template/tree-template.component';
import {TreeDragDropComponent} from './tree/tree-drag-drop/tree-drag-drop.component';
import {IconsComponent} from './icons/icons.component';
import {IconUsageComponent} from './icons/icon-usage/icon-usage.component';
import {IconsListComponent} from './icons/icons-list/icons-list.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {BasicScheduleComponent} from './schedule/basic-schedule/basic-schedule.component';
import {FormComponent} from './forms/form/form.component';
import {OverlaySidebarComponent} from './overlays/overlay-sidebar/overlay-sidebar.component';
import {TreeTableScrollableComponent} from './tree-table/tree-table-scrollable/tree-table-scrollable.component';
import {PickListComponent} from './data/lists/pick-list/pick-list.component';
import {ConfirmationService, TreeDragDropService} from 'primeng/api';
import {SourceCodeTabViewModule} from '@primeng-material/source-code-tab-view';

import {
  AccordionModule,
  AutoCompleteModule,
  BreadcrumbModule,
  ButtonModule,
  CalendarModule,
  CarouselModule,
  CheckboxModule,
  ChipsModule,
  ConfirmDialogModule,
  ContextMenuModule,
  DataGridModule,
  DataListModule,
  DataScrollerModule,
  DataTableModule,
  DialogModule,
  DropdownModule,
  EditorModule,
  FieldsetModule,
  FileUploadModule,
  GMapModule,
  GrowlModule,
  InputMaskModule,
  InputSwitchModule,
  InputTextareaModule,
  InputTextModule,
  LightboxModule,
  ListboxModule,
  MegaMenuModule,
  MenubarModule,
  MenuModule,
  MessagesModule,
  MultiSelectModule,
  OrderListModule,
  OrganizationChartModule,
  OverlayPanelModule,
  PaginatorModule,
  PanelMenuModule,
  PanelModule,
  PasswordModule,
  PickListModule,
  ProgressBarModule,
  RadioButtonModule,
  RatingModule,
  ScheduleModule,
  SelectButtonModule,
  SharedModule as PrimengsSharedModule,
  SidebarModule,
  SlideMenuModule,
  SliderModule,
  SpinnerModule,
  SplitButtonModule,
  StepsModule,
  TabMenuModule,
  TabViewModule,
  TieredMenuModule,
  ToggleButtonModule,
  ToolbarModule,
  TooltipModule,
  TreeModule,
  TreeTableModule,
  TriStateCheckboxModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {MessageService} from 'primeng/components/common/messageservice';
import {TableComponent} from './data/table/table.component';
import {TableFilterComponent} from './data/table/table-filter/table-filter.component';
import {TypographyComponent} from './typography/typography.component';

const routes: Routes = [
  {
    path: 'primeng-material',
    children: [
      {
        path: '',
        redirectTo: 'forms',
        pathMatch: 'full'
      },

      {
        path: 'forms',
        component: FormsComponent
      },
      {
        path: 'data',
        children: [
          {
            path: '',
            redirectTo: 'table',
            pathMatch: 'full'
          },
          {
            path: 'table',
            component: TableComponent
          },
          {
            path: 'data-table',
            component: DataTableComponent
          },
          {
            path: 'plain-html-table',
            component: PlainHTMLTableComponent
          },
          {
            path: 'grids',
            component: GridsComponent
          },
          {
            path: 'lists',
            component: ListsComponent
          },
          {
            path: 'data-scroller',
            component: DataScrollersComponent
          }
        ]
      },
      {
        path: 'tree',
        component: TreeComponent
      },
      {
        path: 'schedule',
        component: ScheduleComponent
      },
      {
        path: 'tree-table',
        component: TreeTableComponent
      },
      {
        path: 'menus',
        component: MenuComponentWrapper
      },
      {
        path: 'panels',
        children: [
          {
            path: '',
            redirectTo: 'accordion',
            pathMatch: 'full'
          },
          {
            path: 'accordion',
            component: AccordionComponent
          },
          {
            path: 'fieldset',
            component: FieldsetComponent
          },
          {
            path: 'panel-card',
            component: PanelOnACardComponent
          },
          {
            path: 'tab-view',
            component: TabViewComponent
          },
          {
            path: 'toolbar',
            component: ToolbarComponent
          }
        ]
      },
      {
        path: 'overlays',
        component: OverlaysComponent
      },
      {
        path: 'fileupload',
        component: FileUploadComponent
      },
      {
        path: 'sidenav',
        component: SideNavComponent
      },
      {
        path: 'sizes',
        component: SizesComponent
      },
      {
        path: 'gridle',
        component: GridleComponent
      },
      {
        path: 'icons',
        component: IconsComponent
      },
      {
        path: 'typography',
        component: TypographyComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SourceCodeTabViewModule,

    PrimengsSharedModule,
    // forms
    AutoCompleteModule,
    CheckboxModule,
    DropdownModule,
    InputSwitchModule,
    InputTextareaModule,
    InputMaskModule,
    PasswordModule,
    RatingModule,
    SpinnerModule,
    ToggleButtonModule,
    CalendarModule,
    ChipsModule,
    EditorModule,
    InputTextModule,
    ListboxModule,
    MultiSelectModule,
    RadioButtonModule,
    SliderModule,
    SelectButtonModule,
    TriStateCheckboxModule,
    ButtonModule,
    SplitButtonModule,
    MessagesModule,
    GrowlModule,
    ProgressBarModule,
    // menus

    MenuModule,
    ContextMenuModule,
    PanelMenuModule,
    StepsModule,
    BreadcrumbModule,
    MegaMenuModule,
    MenubarModule,
    TieredMenuModule,
    SlideMenuModule,
    TabMenuModule,

    // panel
    AccordionModule,
    FieldsetModule,
    PanelModule,
    TabViewModule,
    ToolbarModule,

    // overlay

    ConfirmDialogModule,
    DialogModule,
    OverlayPanelModule,
    LightboxModule,
    TooltipModule,
    SidebarModule,

    // data
    CarouselModule,
    DataGridModule,
    DataListModule,
    DataScrollerModule,
    DataTableModule,
    OrganizationChartModule,
    OrderListModule,
    GMapModule,
    PaginatorModule,
    PickListModule,
    ScheduleModule,
    TreeModule,
    TreeTableModule,
    // fileupload
    FileUploadModule,
    SourceCodeTabViewModule,
    TableModule
  ],
  declarations: [
    FormsComponent,
    MenuComponent,
    OverlaysComponent,
    TreeComponent,
    TreeTableComponent,
    FileUploadComponent,
    AutocompleteComponent,
    SideNavComponent,
    SizesComponent,
    MarginsComponent,
    SideNavBasicComponent,
    PaddingsComponent,
    GridleComponent,
    GridleClassesComponent,
    CheckboxComponent,
    DropdownComponent,
    InputSwitchComponent,
    InputMaskComponent,
    PasswordComponent,
    RatingComponent,
    SpinnerComponent,
    ToggleButtonComponent,
    InputComponent,
    TextareaComponent,
    CalendarComponent,
    ChipsComponent,
    EditorComponent,
    ListboxComponent,
    MultiSelectComponent,
    RadioButtonComponent,
    SliderComponent,
    SelectButtonComponent,
    TriStateCheckboxComponent,
    ButtonsComponent,
    MessagesComponent,
    ProgressBarComponent,
    PanelComponent,
    MenuComponent,
    MenuComponentWrapper,
    TieredMenuComponent,
    SlideMenuComponent,
    StepMenuComponent,
    ContextMenuComponent,
    BreadcrumbComponent,
    MenubarComponent,
    TabMenuComponent,
    MegaMenuComponent,
    AccordionComponent,
    AccordionDefaultComponent,
    AccordionCardComponent,
    AccordionMultipleComponent,
    AccordionTabChangeEventComponent,
    FieldsetComponent,
    FieldsetDefaultComponent,
    FieldsetToggleableComponent,
    PanelOnACardComponent,
    PanelAsACardComponent,
    PanelDefaultComponent,
    TabViewComponent,
    TabViewDefaultComponent,
    TabViewClosableComponent,
    TabViewEventComponent,
    TabViewOrientationLeftComponent,
    TabViewOrientationRightComponent,
    TabViewOrientationBottomComponent,
    ToolbarComponent,
    ToolbarDefaultComponent,
    ToolbarStyledComponent,
    OverlayConfirmDialogComponent,
    OverlayDialogComponent,
    OverlayPanelOnClickComponent,
    OverlayPanelOnHoverComponent,
    OverlayLightboxDefaultComponent,
    OverlayLightboxCustomContentComponent,
    OverlayTooltipDefaultComponent,
    OverlayTooltipEventComponent,
    FileUploadDefaultComponent,
    FileAutoUploadComponent,
    FileUploadAdvancedComponent,
    DataTableComponent,
    ColumnGroupingComponent,
    DataTableCustomComponent,
    DataTableLazyComponent,
    DataTableOnCardComponent,
    PlainHTMLTableComponent,
    PlainHTMLTableDefaultComponent,
    PlainHTMLTableOnCardComponent,
    GridsComponent,
    GridDefaultComponent,
    ListsComponent,
    ListDefaultComponent,
    DataScrollersComponent,
    DataScrollerComponent,
    TreeBasicComponent,
    TreeSingleSelectionComponent,
    TreeMultipleSelectionComponent,
    TreeLazyComponent,
    TreeMultipleSelectionCheckboxComponent,
    TreeContextMenuComponent,
    TreeProgramaticExpansionComponent,
    TreeHorizontalComponent,
    TreeTemplateComponent,
    TreeLoadingComponent,
    TreeDragDropComponent,
    IconsComponent,
    IconUsageComponent,
    IconsListComponent,
    ScheduleComponent,
    BasicScheduleComponent,
    FormComponent,
    OverlaySidebarComponent,
    TreeTableScrollableComponent,
    PickListComponent,
    TableComponent,
    TableFilterComponent,
    TypographyComponent
  ],
  providers: [ConfirmationService, TreeDragDropService, MessageService],
  exports: [TableComponent, TableFilterComponent]
})
export class PrimengComponentsModule {
}
