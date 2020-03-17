export class SqlObservation {
  ObservationID? : number;
  ObserverID? : number;
  Sex? : string;
  Date? : string;
  MoltPercent? : number;
  Comments? : string;
  AgeClass? : string;
  Year? : number;
  SLOCode?: string;
  isApproved?: number;
  LastSeenPup?: string;
  FirstSeenWeaner?: string;
  WeanDateRange?: string;
  EnteredInAno?: number;
  isProcedure: number;
  isDeprecated: number;

  constructor() {
    this.ObservationID = null;
    this.ObserverID = null;
    this.Sex = null;
    this.Date = null;
    this.MoltPercent = null;
    this.Comments = null;
    this.AgeClass = null;
    this.Year = null;
    this.SLOCode = null;
    this.isApproved = null;
    this.LastSeenPup = null;
    this.FirstSeenWeaner = null;
    this.WeanDateRange = null;
    this.EnteredInAno = null;
    this.isProcedure = null;
    this.isDeprecated = null;
  }
}