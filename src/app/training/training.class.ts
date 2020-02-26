export class Training {
  // tslint:disable-next-line:variable-name
  constructor(private _name?: string, private _durationInMinutes?: number) {
  }

  get name() {
    return this._name;
  }

  get durationInMinutes() {
    return this._durationInMinutes;
  }
}
