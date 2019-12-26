/**
 * Defines a referee 
 */
export default class Referee {
  /**
   * The id of the referee
   */
  private _id: number;

  /**
   * The referee's first name
   */
  private _firstName: string;

  /**
   * The referee's last name
   */
  private _lastName: string;

  /**
   * The referee's full name
   */
  private _fullName: string;

  /**
   * The referee's certification level
   */
  private _level: number;
  
  /**
   * Creates a new referee object
   * @param id The referee's id
   * @param firstName The first name of the referee
   * @param lastName  THe last name of the referee
   */
  public constructor(id: number, firstName: string, lastName: string, level: number) {
    this._id = id;

    this._firstName = firstName;
    this._lastName = lastName;
    this._fullName = `${firstName} ${lastName}`;

    this._level = level;
  }

  /**
   * getId
   */
  public getID(): number {
    return this._id;
  }

  /**
   * getFirstName
   */
  public getFirstName(): string {
    return this._firstName;
  }

  /**
   * getLastName
   */
  public getLastName(): string {
    return this._lastName;
  }

  /**
   * getFullName
   */
  public getFullName(): string {
    return this._fullName;
  }

  /**
   * getLevel
   */
  public getLevel(): number {
    return this._level;
  }

};

