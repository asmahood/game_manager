import Referee from './Referee';

/**
 * Different age groups of the players
 */
export const enum Age {
  Novice = "novice",
  Atom = "atom",
  Peewee = "peewee",
  Bantam = "bantam",
  Midget = "midget"
}

/**
 * Different levels of hockey that are played
 */
export const enum Level {
  Houseleague = "HL",
  MD = "MD",
  A = "A",
  AA = "AA",
  AAA = "AAA"
}

/**
 * Different referee systems that can be used for a game
 */
export const enum System {
  Man2 = "2-Man System",
  Man3 = "3-Man System",
  Man4 = "4-Man System"
}

/**
 * Different positions for an official
 */
export const enum Position {
  Ref2Man = "2-Man Referee",
  Ref3Man = "3-Man Referee",
  Ref4Man = "4-Man Referee",
  Line3Man = "3-Man Linesman",
  Line4Man = "4-Man Linesman"
}

export interface Partner {
  referee: Referee;
  position: Position;
}

/**
 * 
 */
export class Game {
  /**
   * A referee's id number (different than Alliance ID)
   */
  private _id: number;

  /**
   * The location of the game
   */
  private _location: string;

  /**
   * The age group of the game
   */
  private _age: Age;

  /**
   * The level of hockey being played
   */
  private _level: Level;

  /** 
   * The referee system being used in the game
   */
  private _sys: System;

  /**
   * The position being played by the referee
   */
  private _position: Position;

  /**
   * The partners the referee officiated with
   */
  private _partners: Partner[];

  /**
   * Creates a new game.
   * @param id The game id
   * @param location The arena
   * @param age Age group of the players
   * @param level Level of the game
   * @param sys Referee system
   * @param position Position of the referee
   * @param partners Partners in the game
   */
  public constructor(id: number, location: string, age: Age, level: Level, sys: System, position: Position, partners: Partner[]) {
    this._id = id;
    this._location = location;
    this._age = age;
    this._level = level;
    this._sys = sys;
    this._position = position;
    this._partners = partners;
  }

  /**
   * getID
   */
  public getID(): number {
    return this._id;
  }

  /**
   * getLocation
   */
  public getLocation(): string {
    return this._location;
  }

  /**
   * getAge
   */
  public getAge(): Age {
    return this._age;
  }

  /**
   * getLevel
   */
  public getLevel(): Level {
    return this._level;
  }

  public getSystem(): System {
    return this._sys;
  }

  /**
   * getPosition
   */
  public getPosition(): Position {
    return this._position;
  }

  /**
   * getPartners
   */
  public getPartners(): Partner[] {
    return this._partners;
  }
};
