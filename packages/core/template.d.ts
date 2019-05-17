import { View } from './view';
export declare type TemplateRender<State, Context> = (ctx: Context, state: State) => View<State>;
export interface Template<State, Context> {
    render: TemplateRender<State, Context>;
}
//# sourceMappingURL=template.d.ts.map