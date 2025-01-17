export interface Habit {
  id: string;
  name: string;
  type: 'multiple' | 'single';
  frequency: number;
  combo: number;
  lastDateCompleted: string;
}
