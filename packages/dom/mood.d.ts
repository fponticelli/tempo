import { DOMComponent } from './component';
export interface MoodView<State, Action> {
    destroy(): void;
    dispatch(action: Action): void;
    change(state: State): void;
}
export declare const Mood: {
    render<State, Action>(options: {
        el: HTMLElement;
        component: DOMComponent<State, Action>;
        observe?: ((state: State, action: Action) => void) | undefined;
        document?: Document | undefined;
    }): MoodView<State, Action>;
};
//# sourceMappingURL=mood.d.ts.map