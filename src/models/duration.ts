export class Duration {
  private startDate: number;
  private endDate: number;

  start(): void {
    this.startDate = Date.now();
  }

  end(): void {
    this.endDate = Date.now();
  }

  milliseconds(): number {
    return this.endDate - this.startDate;
  }
}
