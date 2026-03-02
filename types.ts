export type ChestStatus = 'closed' | 'opened_empty' | 'opened_gold' | 'opened_jackpot';

export interface ChestProps {
  id: number;
  status: ChestStatus;
  onClick?: () => void;
  disabled?: boolean;
}