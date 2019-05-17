import { MoodAttribute } from './value';
export interface MoodAttributes<State, El> {
    moodAfterRender?: MoodAttribute<State, El>;
    moodAfterChange?: MoodAttribute<State, El>;
    moodBeforeChange?: MoodAttribute<State, El>;
    moodBeforeDestroy?: (el: El) => void;
}
//# sourceMappingURL=mood_attributes.d.ts.map