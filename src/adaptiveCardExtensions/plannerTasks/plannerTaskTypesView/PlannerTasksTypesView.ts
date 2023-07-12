import { ISPFxAdaptiveCard, BaseAdaptiveCardView, IActionArguments } from '@microsoft/sp-adaptive-card-extension-base';
import { IPlannerTasksAdaptiveCardExtensionProps, IPlannerTasksAdaptiveCardExtensionState, PLANNERTASKS_LIST_QUICKVIEW } from '../PlannerTasksAdaptiveCardExtension';

export interface IPlannerTasksTypesViewData {
  taskTypes: any[];
}


export class PlannerTasksTypesView extends BaseAdaptiveCardView<
  IPlannerTasksAdaptiveCardExtensionProps,
  IPlannerTasksAdaptiveCardExtensionState,
  IPlannerTasksTypesViewData
> {
  public get data(): IPlannerTasksTypesViewData {

    const { tasks } = this.state;

    let taskTypes: any[] = [
      {
        id: "urgent",
        title: "Urgent Tasks",
        Icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' %3E%3Cpath d='M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0'%3E%3C/path%3E%3C/svg%3E",
        Count: tasks.filter(t => t.priority == 1).length
      },
      {
        id: "due",
        title: "Upcoming Tasks",
        Icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2048 2048'%3E%3Cpath d='M2011 1728l-318 317-90-90 163-163h-614v-128h614l-163-163 90-90 318 317zm-624 192l128 128H256V256h512q0-53 20-99t55-82 81-55 100-20q53 0 99 20t82 55 55 81 20 100h512v1073l-128-128V384h-128v256H512V384H384v1536h1003zM640 384v128h768V384h-256V256q0-27-10-50t-27-40-41-28-50-10q-27 0-50 10t-40 27-28 41-10 50v128H640z' fill='%23333333'%3E%3C/path%3E%3C/svg%3E",
        Count: tasks.filter(t => t.isOverDue == false).length
      },
      {
        id: "overdue",
        title: "Overdue Tasks",
        Icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2048 2048'%3E%3Cpath d='M128 128h1792v512H128V128zm1664 384V256H256v256h1536zM512 1280V768h1408v512H512zm128-384v256h1152V896H640zM128 1920v-512h1792v512H128zm128-384v256h1536v-256H256z' fill='%23333333'%3E%3C/path%3E%3C/svg%3E",
        count: tasks.filter(t => t.isOverDue == true).length

      },
      {
        id: "inprogress",
        title: "In Progress Tasks",
        Icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2048 2048'%3E%3Cpath d='M1024 96q33 0 62 12t51 35 34 51 13 62q0 33-12 62t-35 51-51 34-62 13q-33 0-62-12t-51-35-34-51-13-62q0-33 12-62t35-51 51-34 62-13zM337 481q0-30 11-56t30-45 46-31 57-12q30 0 56 11t45 31 31 46 12 56q0 30-11 56t-31 46-46 31-56 11q-30 0-56-11t-46-30-31-46-11-57zm-81 415q27 0 50 10t40 27 28 41 10 50q0 27-10 50t-27 40-41 28-50 10q-27 0-50-10t-40-27-28-41-10-50q0-27 10-50t27-40 41-28 50-10zm113 671q0-23 9-43t24-36 35-24 44-9q23 0 43 9t36 24 24 35 9 44q0 23-9 43t-24 36-35 24-44 9q-23 0-43-9t-36-24-24-35-9-44zm655 129q40 0 68 28t28 68q0 40-28 68t-68 28q-40 0-68-28t-28-68q0-40 28-68t68-28zm463-129q0-34 23-57t57-23q34 0 57 23t23 57q0 34-23 57t-57 23q-34 0-57-23t-23-57zm305-607q26 0 45 19t19 45q0 26-19 45t-45 19q-26 0-45-19t-19-45q0-26 19-45t45-19zm-225-655q36 0 68 14t56 38 38 56 14 68q0 36-14 68t-38 56-56 38-68 14q-36 0-68-14t-56-38-38-56-14-68q0-36 14-68t38-56 56-38 68-14z' fill='%23333333'%3E%3C/path%3E%3C/svg%3E",
        count: tasks.filter(t => t.status == 'In Progress').length

      },
      {
        id: "pending",
        title: "Pending Tasks",
        Icon: "data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2048 2048'%3E%3Cpath d='M2023 540q25 27 25 60 0 35-25 60L872 1811q-12 13-27 19t-33 6q-35 0-60-25l-636-636q-13-12-19-27t-6-33q0-35 25-60l303-304q27-25 60-25 35 0 60 25l273 273 787-787q13-13 28-19t32-6q17 0 32 6t29 19l303 303zM237 1115l242 242 243-242-243-243-242 243zm575 575L1902 600l-243-242L570 1448l7 7 235 235z' fill='%23333333'%3E%3C/path%3E%3C/svg%3E",
        count: tasks.filter(t => t.status == 'Pending').length

      },
      {
        id: "completed",
        title: "Completed Tasks",
        Icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2048 2048'%3E%3Cpath d='M1491 595l90 90-749 749-365-365 90-90 275 275 659-659zM1024 0q141 0 272 36t245 103 207 160 160 208 103 245 37 272q0 141-36 272t-103 245-160 207-208 160-245 103-272 37q-141 0-272-36t-245-103-207-160-160-208-103-244-37-273q0-141 36-272t103-245 160-207 208-160T751 37t273-37zm0 1920q123 0 237-32t214-90 182-141 140-181 91-214 32-238q0-123-32-237t-90-214-141-182-181-140-214-91-238-32q-123 0-237 32t-214 90-182 141-140 181-91 214-32 238q0 123 32 237t90 214 141 182 181 140 214 91 238 32z' fill='%23333333'%3E%3C/path%3E%3C/svg%3E",
        count: tasks.filter(t => t.status == 'Completed').length
      }
    ];
    return {
      taskTypes
    };
  }
  public onAction(action: IActionArguments): void {
    this.setState({ selectedTasksType: action?.id });
    this.quickViewNavigator.push(PLANNERTASKS_LIST_QUICKVIEW);
  }

  public get template(): ISPFxAdaptiveCard {
    return require('./template/PlannerTasksTypesViewTemplate.json');
  }
}