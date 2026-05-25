
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model OtpVerification
 * 
 */
export type OtpVerification = $Result.DefaultSelection<Prisma.$OtpVerificationPayload>
/**
 * Model Hospital
 * 
 */
export type Hospital = $Result.DefaultSelection<Prisma.$HospitalPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model BloodInventory
 * 
 */
export type BloodInventory = $Result.DefaultSelection<Prisma.$BloodInventoryPayload>
/**
 * Model BloodRequest
 * 
 */
export type BloodRequest = $Result.DefaultSelection<Prisma.$BloodRequestPayload>
/**
 * Model InventoryHistory
 * 
 */
export type InventoryHistory = $Result.DefaultSelection<Prisma.$InventoryHistoryPayload>
/**
 * Model DonationAppointment
 * 
 */
export type DonationAppointment = $Result.DefaultSelection<Prisma.$DonationAppointmentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more OtpVerifications
 * const otpVerifications = await prisma.otpVerification.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more OtpVerifications
   * const otpVerifications = await prisma.otpVerification.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.otpVerification`: Exposes CRUD operations for the **OtpVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtpVerifications
    * const otpVerifications = await prisma.otpVerification.findMany()
    * ```
    */
  get otpVerification(): Prisma.OtpVerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hospital`: Exposes CRUD operations for the **Hospital** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hospitals
    * const hospitals = await prisma.hospital.findMany()
    * ```
    */
  get hospital(): Prisma.HospitalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bloodInventory`: Exposes CRUD operations for the **BloodInventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BloodInventories
    * const bloodInventories = await prisma.bloodInventory.findMany()
    * ```
    */
  get bloodInventory(): Prisma.BloodInventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bloodRequest`: Exposes CRUD operations for the **BloodRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BloodRequests
    * const bloodRequests = await prisma.bloodRequest.findMany()
    * ```
    */
  get bloodRequest(): Prisma.BloodRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryHistory`: Exposes CRUD operations for the **InventoryHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryHistories
    * const inventoryHistories = await prisma.inventoryHistory.findMany()
    * ```
    */
  get inventoryHistory(): Prisma.InventoryHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donationAppointment`: Exposes CRUD operations for the **DonationAppointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DonationAppointments
    * const donationAppointments = await prisma.donationAppointment.findMany()
    * ```
    */
  get donationAppointment(): Prisma.DonationAppointmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    OtpVerification: 'OtpVerification',
    Hospital: 'Hospital',
    User: 'User',
    BloodInventory: 'BloodInventory',
    BloodRequest: 'BloodRequest',
    InventoryHistory: 'InventoryHistory',
    DonationAppointment: 'DonationAppointment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "otpVerification" | "hospital" | "user" | "bloodInventory" | "bloodRequest" | "inventoryHistory" | "donationAppointment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      OtpVerification: {
        payload: Prisma.$OtpVerificationPayload<ExtArgs>
        fields: Prisma.OtpVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          findFirst: {
            args: Prisma.OtpVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          findMany: {
            args: Prisma.OtpVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>[]
          }
          create: {
            args: Prisma.OtpVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          createMany: {
            args: Prisma.OtpVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpVerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>[]
          }
          delete: {
            args: Prisma.OtpVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          update: {
            args: Prisma.OtpVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          deleteMany: {
            args: Prisma.OtpVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtpVerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>[]
          }
          upsert: {
            args: Prisma.OtpVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          aggregate: {
            args: Prisma.OtpVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtpVerification>
          }
          groupBy: {
            args: Prisma.OtpVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<OtpVerificationCountAggregateOutputType> | number
          }
        }
      }
      Hospital: {
        payload: Prisma.$HospitalPayload<ExtArgs>
        fields: Prisma.HospitalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HospitalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HospitalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findFirst: {
            args: Prisma.HospitalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HospitalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findMany: {
            args: Prisma.HospitalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          create: {
            args: Prisma.HospitalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          createMany: {
            args: Prisma.HospitalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HospitalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          delete: {
            args: Prisma.HospitalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          update: {
            args: Prisma.HospitalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          deleteMany: {
            args: Prisma.HospitalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HospitalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HospitalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          upsert: {
            args: Prisma.HospitalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          aggregate: {
            args: Prisma.HospitalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHospital>
          }
          groupBy: {
            args: Prisma.HospitalGroupByArgs<ExtArgs>
            result: $Utils.Optional<HospitalGroupByOutputType>[]
          }
          count: {
            args: Prisma.HospitalCountArgs<ExtArgs>
            result: $Utils.Optional<HospitalCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      BloodInventory: {
        payload: Prisma.$BloodInventoryPayload<ExtArgs>
        fields: Prisma.BloodInventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BloodInventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodInventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BloodInventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodInventoryPayload>
          }
          findFirst: {
            args: Prisma.BloodInventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodInventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BloodInventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodInventoryPayload>
          }
          findMany: {
            args: Prisma.BloodInventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodInventoryPayload>[]
          }
          create: {
            args: Prisma.BloodInventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodInventoryPayload>
          }
          createMany: {
            args: Prisma.BloodInventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BloodInventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodInventoryPayload>[]
          }
          delete: {
            args: Prisma.BloodInventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodInventoryPayload>
          }
          update: {
            args: Prisma.BloodInventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodInventoryPayload>
          }
          deleteMany: {
            args: Prisma.BloodInventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BloodInventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BloodInventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodInventoryPayload>[]
          }
          upsert: {
            args: Prisma.BloodInventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodInventoryPayload>
          }
          aggregate: {
            args: Prisma.BloodInventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBloodInventory>
          }
          groupBy: {
            args: Prisma.BloodInventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BloodInventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BloodInventoryCountArgs<ExtArgs>
            result: $Utils.Optional<BloodInventoryCountAggregateOutputType> | number
          }
        }
      }
      BloodRequest: {
        payload: Prisma.$BloodRequestPayload<ExtArgs>
        fields: Prisma.BloodRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BloodRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BloodRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          findFirst: {
            args: Prisma.BloodRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BloodRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          findMany: {
            args: Prisma.BloodRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>[]
          }
          create: {
            args: Prisma.BloodRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          createMany: {
            args: Prisma.BloodRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BloodRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>[]
          }
          delete: {
            args: Prisma.BloodRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          update: {
            args: Prisma.BloodRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          deleteMany: {
            args: Prisma.BloodRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BloodRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BloodRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>[]
          }
          upsert: {
            args: Prisma.BloodRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          aggregate: {
            args: Prisma.BloodRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBloodRequest>
          }
          groupBy: {
            args: Prisma.BloodRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<BloodRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.BloodRequestCountArgs<ExtArgs>
            result: $Utils.Optional<BloodRequestCountAggregateOutputType> | number
          }
        }
      }
      InventoryHistory: {
        payload: Prisma.$InventoryHistoryPayload<ExtArgs>
        fields: Prisma.InventoryHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryHistoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryHistoryPayload>
          }
          findMany: {
            args: Prisma.InventoryHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryHistoryPayload>[]
          }
          create: {
            args: Prisma.InventoryHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryHistoryPayload>
          }
          createMany: {
            args: Prisma.InventoryHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryHistoryPayload>[]
          }
          delete: {
            args: Prisma.InventoryHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryHistoryPayload>
          }
          update: {
            args: Prisma.InventoryHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryHistoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryHistoryPayload>[]
          }
          upsert: {
            args: Prisma.InventoryHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryHistoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryHistory>
          }
          groupBy: {
            args: Prisma.InventoryHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryHistoryCountAggregateOutputType> | number
          }
        }
      }
      DonationAppointment: {
        payload: Prisma.$DonationAppointmentPayload<ExtArgs>
        fields: Prisma.DonationAppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationAppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationAppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationAppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationAppointmentPayload>
          }
          findFirst: {
            args: Prisma.DonationAppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationAppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationAppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationAppointmentPayload>
          }
          findMany: {
            args: Prisma.DonationAppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationAppointmentPayload>[]
          }
          create: {
            args: Prisma.DonationAppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationAppointmentPayload>
          }
          createMany: {
            args: Prisma.DonationAppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonationAppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationAppointmentPayload>[]
          }
          delete: {
            args: Prisma.DonationAppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationAppointmentPayload>
          }
          update: {
            args: Prisma.DonationAppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationAppointmentPayload>
          }
          deleteMany: {
            args: Prisma.DonationAppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationAppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonationAppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationAppointmentPayload>[]
          }
          upsert: {
            args: Prisma.DonationAppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationAppointmentPayload>
          }
          aggregate: {
            args: Prisma.DonationAppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonationAppointment>
          }
          groupBy: {
            args: Prisma.DonationAppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationAppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationAppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<DonationAppointmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    otpVerification?: OtpVerificationOmit
    hospital?: HospitalOmit
    user?: UserOmit
    bloodInventory?: BloodInventoryOmit
    bloodRequest?: BloodRequestOmit
    inventoryHistory?: InventoryHistoryOmit
    donationAppointment?: DonationAppointmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type HospitalCountOutputType
   */

  export type HospitalCountOutputType = {
    users: number
    bloodInventory: number
    bloodRequests: number
    inventoryHistory: number
    donationAppointments: number
  }

  export type HospitalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | HospitalCountOutputTypeCountUsersArgs
    bloodInventory?: boolean | HospitalCountOutputTypeCountBloodInventoryArgs
    bloodRequests?: boolean | HospitalCountOutputTypeCountBloodRequestsArgs
    inventoryHistory?: boolean | HospitalCountOutputTypeCountInventoryHistoryArgs
    donationAppointments?: boolean | HospitalCountOutputTypeCountDonationAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalCountOutputType
     */
    select?: HospitalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeCountBloodInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloodInventoryWhereInput
  }

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeCountBloodRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloodRequestWhereInput
  }

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeCountInventoryHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryHistoryWhereInput
  }

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeCountDonationAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationAppointmentWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bloodRequests: number
    inventoryHistory: number
    donationAppointments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodRequests?: boolean | UserCountOutputTypeCountBloodRequestsArgs
    inventoryHistory?: boolean | UserCountOutputTypeCountInventoryHistoryArgs
    donationAppointments?: boolean | UserCountOutputTypeCountDonationAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBloodRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloodRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInventoryHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonationAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationAppointmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model OtpVerification
   */

  export type AggregateOtpVerification = {
    _count: OtpVerificationCountAggregateOutputType | null
    _avg: OtpVerificationAvgAggregateOutputType | null
    _sum: OtpVerificationSumAggregateOutputType | null
    _min: OtpVerificationMinAggregateOutputType | null
    _max: OtpVerificationMaxAggregateOutputType | null
  }

  export type OtpVerificationAvgAggregateOutputType = {
    id: number | null
  }

  export type OtpVerificationSumAggregateOutputType = {
    id: number | null
  }

  export type OtpVerificationMinAggregateOutputType = {
    id: number | null
    email: string | null
    otp: string | null
    expiresAt: Date | null
  }

  export type OtpVerificationMaxAggregateOutputType = {
    id: number | null
    email: string | null
    otp: string | null
    expiresAt: Date | null
  }

  export type OtpVerificationCountAggregateOutputType = {
    id: number
    email: number
    otp: number
    expiresAt: number
    _all: number
  }


  export type OtpVerificationAvgAggregateInputType = {
    id?: true
  }

  export type OtpVerificationSumAggregateInputType = {
    id?: true
  }

  export type OtpVerificationMinAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expiresAt?: true
  }

  export type OtpVerificationMaxAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expiresAt?: true
  }

  export type OtpVerificationCountAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expiresAt?: true
    _all?: true
  }

  export type OtpVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpVerification to aggregate.
     */
    where?: OtpVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpVerifications to fetch.
     */
    orderBy?: OtpVerificationOrderByWithRelationInput | OtpVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtpVerifications
    **/
    _count?: true | OtpVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtpVerificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtpVerificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpVerificationMaxAggregateInputType
  }

  export type GetOtpVerificationAggregateType<T extends OtpVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateOtpVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtpVerification[P]>
      : GetScalarType<T[P], AggregateOtpVerification[P]>
  }




  export type OtpVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpVerificationWhereInput
    orderBy?: OtpVerificationOrderByWithAggregationInput | OtpVerificationOrderByWithAggregationInput[]
    by: OtpVerificationScalarFieldEnum[] | OtpVerificationScalarFieldEnum
    having?: OtpVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpVerificationCountAggregateInputType | true
    _avg?: OtpVerificationAvgAggregateInputType
    _sum?: OtpVerificationSumAggregateInputType
    _min?: OtpVerificationMinAggregateInputType
    _max?: OtpVerificationMaxAggregateInputType
  }

  export type OtpVerificationGroupByOutputType = {
    id: number
    email: string
    otp: string
    expiresAt: Date
    _count: OtpVerificationCountAggregateOutputType | null
    _avg: OtpVerificationAvgAggregateOutputType | null
    _sum: OtpVerificationSumAggregateOutputType | null
    _min: OtpVerificationMinAggregateOutputType | null
    _max: OtpVerificationMaxAggregateOutputType | null
  }

  type GetOtpVerificationGroupByPayload<T extends OtpVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], OtpVerificationGroupByOutputType[P]>
        }
      >
    >


  export type OtpVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["otpVerification"]>

  export type OtpVerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["otpVerification"]>

  export type OtpVerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["otpVerification"]>

  export type OtpVerificationSelectScalar = {
    id?: boolean
    email?: boolean
    otp?: boolean
    expiresAt?: boolean
  }

  export type OtpVerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "otp" | "expiresAt", ExtArgs["result"]["otpVerification"]>

  export type $OtpVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtpVerification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      otp: string
      expiresAt: Date
    }, ExtArgs["result"]["otpVerification"]>
    composites: {}
  }

  type OtpVerificationGetPayload<S extends boolean | null | undefined | OtpVerificationDefaultArgs> = $Result.GetResult<Prisma.$OtpVerificationPayload, S>

  type OtpVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpVerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpVerificationCountAggregateInputType | true
    }

  export interface OtpVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtpVerification'], meta: { name: 'OtpVerification' } }
    /**
     * Find zero or one OtpVerification that matches the filter.
     * @param {OtpVerificationFindUniqueArgs} args - Arguments to find a OtpVerification
     * @example
     * // Get one OtpVerification
     * const otpVerification = await prisma.otpVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpVerificationFindUniqueArgs>(args: SelectSubset<T, OtpVerificationFindUniqueArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OtpVerification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpVerificationFindUniqueOrThrowArgs} args - Arguments to find a OtpVerification
     * @example
     * // Get one OtpVerification
     * const otpVerification = await prisma.otpVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtpVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationFindFirstArgs} args - Arguments to find a OtpVerification
     * @example
     * // Get one OtpVerification
     * const otpVerification = await prisma.otpVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpVerificationFindFirstArgs>(args?: SelectSubset<T, OtpVerificationFindFirstArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtpVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationFindFirstOrThrowArgs} args - Arguments to find a OtpVerification
     * @example
     * // Get one OtpVerification
     * const otpVerification = await prisma.otpVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtpVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtpVerifications
     * const otpVerifications = await prisma.otpVerification.findMany()
     * 
     * // Get first 10 OtpVerifications
     * const otpVerifications = await prisma.otpVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpVerificationWithIdOnly = await prisma.otpVerification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpVerificationFindManyArgs>(args?: SelectSubset<T, OtpVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OtpVerification.
     * @param {OtpVerificationCreateArgs} args - Arguments to create a OtpVerification.
     * @example
     * // Create one OtpVerification
     * const OtpVerification = await prisma.otpVerification.create({
     *   data: {
     *     // ... data to create a OtpVerification
     *   }
     * })
     * 
     */
    create<T extends OtpVerificationCreateArgs>(args: SelectSubset<T, OtpVerificationCreateArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OtpVerifications.
     * @param {OtpVerificationCreateManyArgs} args - Arguments to create many OtpVerifications.
     * @example
     * // Create many OtpVerifications
     * const otpVerification = await prisma.otpVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpVerificationCreateManyArgs>(args?: SelectSubset<T, OtpVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtpVerifications and returns the data saved in the database.
     * @param {OtpVerificationCreateManyAndReturnArgs} args - Arguments to create many OtpVerifications.
     * @example
     * // Create many OtpVerifications
     * const otpVerification = await prisma.otpVerification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtpVerifications and only return the `id`
     * const otpVerificationWithIdOnly = await prisma.otpVerification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpVerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpVerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OtpVerification.
     * @param {OtpVerificationDeleteArgs} args - Arguments to delete one OtpVerification.
     * @example
     * // Delete one OtpVerification
     * const OtpVerification = await prisma.otpVerification.delete({
     *   where: {
     *     // ... filter to delete one OtpVerification
     *   }
     * })
     * 
     */
    delete<T extends OtpVerificationDeleteArgs>(args: SelectSubset<T, OtpVerificationDeleteArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OtpVerification.
     * @param {OtpVerificationUpdateArgs} args - Arguments to update one OtpVerification.
     * @example
     * // Update one OtpVerification
     * const otpVerification = await prisma.otpVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpVerificationUpdateArgs>(args: SelectSubset<T, OtpVerificationUpdateArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OtpVerifications.
     * @param {OtpVerificationDeleteManyArgs} args - Arguments to filter OtpVerifications to delete.
     * @example
     * // Delete a few OtpVerifications
     * const { count } = await prisma.otpVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpVerificationDeleteManyArgs>(args?: SelectSubset<T, OtpVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtpVerifications
     * const otpVerification = await prisma.otpVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpVerificationUpdateManyArgs>(args: SelectSubset<T, OtpVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpVerifications and returns the data updated in the database.
     * @param {OtpVerificationUpdateManyAndReturnArgs} args - Arguments to update many OtpVerifications.
     * @example
     * // Update many OtpVerifications
     * const otpVerification = await prisma.otpVerification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OtpVerifications and only return the `id`
     * const otpVerificationWithIdOnly = await prisma.otpVerification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OtpVerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, OtpVerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OtpVerification.
     * @param {OtpVerificationUpsertArgs} args - Arguments to update or create a OtpVerification.
     * @example
     * // Update or create a OtpVerification
     * const otpVerification = await prisma.otpVerification.upsert({
     *   create: {
     *     // ... data to create a OtpVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtpVerification we want to update
     *   }
     * })
     */
    upsert<T extends OtpVerificationUpsertArgs>(args: SelectSubset<T, OtpVerificationUpsertArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OtpVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationCountArgs} args - Arguments to filter OtpVerifications to count.
     * @example
     * // Count the number of OtpVerifications
     * const count = await prisma.otpVerification.count({
     *   where: {
     *     // ... the filter for the OtpVerifications we want to count
     *   }
     * })
    **/
    count<T extends OtpVerificationCountArgs>(
      args?: Subset<T, OtpVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtpVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OtpVerificationAggregateArgs>(args: Subset<T, OtpVerificationAggregateArgs>): Prisma.PrismaPromise<GetOtpVerificationAggregateType<T>>

    /**
     * Group by OtpVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OtpVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpVerificationGroupByArgs['orderBy'] }
        : { orderBy?: OtpVerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OtpVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtpVerification model
   */
  readonly fields: OtpVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtpVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OtpVerification model
   */
  interface OtpVerificationFieldRefs {
    readonly id: FieldRef<"OtpVerification", 'Int'>
    readonly email: FieldRef<"OtpVerification", 'String'>
    readonly otp: FieldRef<"OtpVerification", 'String'>
    readonly expiresAt: FieldRef<"OtpVerification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OtpVerification findUnique
   */
  export type OtpVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * Filter, which OtpVerification to fetch.
     */
    where: OtpVerificationWhereUniqueInput
  }

  /**
   * OtpVerification findUniqueOrThrow
   */
  export type OtpVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * Filter, which OtpVerification to fetch.
     */
    where: OtpVerificationWhereUniqueInput
  }

  /**
   * OtpVerification findFirst
   */
  export type OtpVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * Filter, which OtpVerification to fetch.
     */
    where?: OtpVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpVerifications to fetch.
     */
    orderBy?: OtpVerificationOrderByWithRelationInput | OtpVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpVerifications.
     */
    cursor?: OtpVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpVerifications.
     */
    distinct?: OtpVerificationScalarFieldEnum | OtpVerificationScalarFieldEnum[]
  }

  /**
   * OtpVerification findFirstOrThrow
   */
  export type OtpVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * Filter, which OtpVerification to fetch.
     */
    where?: OtpVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpVerifications to fetch.
     */
    orderBy?: OtpVerificationOrderByWithRelationInput | OtpVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpVerifications.
     */
    cursor?: OtpVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpVerifications.
     */
    distinct?: OtpVerificationScalarFieldEnum | OtpVerificationScalarFieldEnum[]
  }

  /**
   * OtpVerification findMany
   */
  export type OtpVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * Filter, which OtpVerifications to fetch.
     */
    where?: OtpVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpVerifications to fetch.
     */
    orderBy?: OtpVerificationOrderByWithRelationInput | OtpVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtpVerifications.
     */
    cursor?: OtpVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpVerifications.
     */
    distinct?: OtpVerificationScalarFieldEnum | OtpVerificationScalarFieldEnum[]
  }

  /**
   * OtpVerification create
   */
  export type OtpVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a OtpVerification.
     */
    data: XOR<OtpVerificationCreateInput, OtpVerificationUncheckedCreateInput>
  }

  /**
   * OtpVerification createMany
   */
  export type OtpVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtpVerifications.
     */
    data: OtpVerificationCreateManyInput | OtpVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtpVerification createManyAndReturn
   */
  export type OtpVerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * The data used to create many OtpVerifications.
     */
    data: OtpVerificationCreateManyInput | OtpVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtpVerification update
   */
  export type OtpVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a OtpVerification.
     */
    data: XOR<OtpVerificationUpdateInput, OtpVerificationUncheckedUpdateInput>
    /**
     * Choose, which OtpVerification to update.
     */
    where: OtpVerificationWhereUniqueInput
  }

  /**
   * OtpVerification updateMany
   */
  export type OtpVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtpVerifications.
     */
    data: XOR<OtpVerificationUpdateManyMutationInput, OtpVerificationUncheckedUpdateManyInput>
    /**
     * Filter which OtpVerifications to update
     */
    where?: OtpVerificationWhereInput
    /**
     * Limit how many OtpVerifications to update.
     */
    limit?: number
  }

  /**
   * OtpVerification updateManyAndReturn
   */
  export type OtpVerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * The data used to update OtpVerifications.
     */
    data: XOR<OtpVerificationUpdateManyMutationInput, OtpVerificationUncheckedUpdateManyInput>
    /**
     * Filter which OtpVerifications to update
     */
    where?: OtpVerificationWhereInput
    /**
     * Limit how many OtpVerifications to update.
     */
    limit?: number
  }

  /**
   * OtpVerification upsert
   */
  export type OtpVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the OtpVerification to update in case it exists.
     */
    where: OtpVerificationWhereUniqueInput
    /**
     * In case the OtpVerification found by the `where` argument doesn't exist, create a new OtpVerification with this data.
     */
    create: XOR<OtpVerificationCreateInput, OtpVerificationUncheckedCreateInput>
    /**
     * In case the OtpVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpVerificationUpdateInput, OtpVerificationUncheckedUpdateInput>
  }

  /**
   * OtpVerification delete
   */
  export type OtpVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * Filter which OtpVerification to delete.
     */
    where: OtpVerificationWhereUniqueInput
  }

  /**
   * OtpVerification deleteMany
   */
  export type OtpVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpVerifications to delete
     */
    where?: OtpVerificationWhereInput
    /**
     * Limit how many OtpVerifications to delete.
     */
    limit?: number
  }

  /**
   * OtpVerification without action
   */
  export type OtpVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
  }


  /**
   * Model Hospital
   */

  export type AggregateHospital = {
    _count: HospitalCountAggregateOutputType | null
    _avg: HospitalAvgAggregateOutputType | null
    _sum: HospitalSumAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  export type HospitalAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type HospitalSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type HospitalMinAggregateOutputType = {
    id: number | null
    name: string | null
    city: string | null
    latitude: number | null
    longitude: number | null
  }

  export type HospitalMaxAggregateOutputType = {
    id: number | null
    name: string | null
    city: string | null
    latitude: number | null
    longitude: number | null
  }

  export type HospitalCountAggregateOutputType = {
    id: number
    name: number
    city: number
    latitude: number
    longitude: number
    _all: number
  }


  export type HospitalAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type HospitalSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type HospitalMinAggregateInputType = {
    id?: true
    name?: true
    city?: true
    latitude?: true
    longitude?: true
  }

  export type HospitalMaxAggregateInputType = {
    id?: true
    name?: true
    city?: true
    latitude?: true
    longitude?: true
  }

  export type HospitalCountAggregateInputType = {
    id?: true
    name?: true
    city?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type HospitalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospital to aggregate.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hospitals
    **/
    _count?: true | HospitalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HospitalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HospitalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospitalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospitalMaxAggregateInputType
  }

  export type GetHospitalAggregateType<T extends HospitalAggregateArgs> = {
        [P in keyof T & keyof AggregateHospital]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospital[P]>
      : GetScalarType<T[P], AggregateHospital[P]>
  }




  export type HospitalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospitalWhereInput
    orderBy?: HospitalOrderByWithAggregationInput | HospitalOrderByWithAggregationInput[]
    by: HospitalScalarFieldEnum[] | HospitalScalarFieldEnum
    having?: HospitalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospitalCountAggregateInputType | true
    _avg?: HospitalAvgAggregateInputType
    _sum?: HospitalSumAggregateInputType
    _min?: HospitalMinAggregateInputType
    _max?: HospitalMaxAggregateInputType
  }

  export type HospitalGroupByOutputType = {
    id: number
    name: string
    city: string
    latitude: number | null
    longitude: number | null
    _count: HospitalCountAggregateOutputType | null
    _avg: HospitalAvgAggregateOutputType | null
    _sum: HospitalSumAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  type GetHospitalGroupByPayload<T extends HospitalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospitalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospitalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospitalGroupByOutputType[P]>
            : GetScalarType<T[P], HospitalGroupByOutputType[P]>
        }
      >
    >


  export type HospitalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    users?: boolean | Hospital$usersArgs<ExtArgs>
    bloodInventory?: boolean | Hospital$bloodInventoryArgs<ExtArgs>
    bloodRequests?: boolean | Hospital$bloodRequestsArgs<ExtArgs>
    inventoryHistory?: boolean | Hospital$inventoryHistoryArgs<ExtArgs>
    donationAppointments?: boolean | Hospital$donationAppointmentsArgs<ExtArgs>
    _count?: boolean | HospitalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectScalar = {
    id?: boolean
    name?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type HospitalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "city" | "latitude" | "longitude", ExtArgs["result"]["hospital"]>
  export type HospitalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Hospital$usersArgs<ExtArgs>
    bloodInventory?: boolean | Hospital$bloodInventoryArgs<ExtArgs>
    bloodRequests?: boolean | Hospital$bloodRequestsArgs<ExtArgs>
    inventoryHistory?: boolean | Hospital$inventoryHistoryArgs<ExtArgs>
    donationAppointments?: boolean | Hospital$donationAppointmentsArgs<ExtArgs>
    _count?: boolean | HospitalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HospitalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HospitalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HospitalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hospital"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      bloodInventory: Prisma.$BloodInventoryPayload<ExtArgs>[]
      bloodRequests: Prisma.$BloodRequestPayload<ExtArgs>[]
      inventoryHistory: Prisma.$InventoryHistoryPayload<ExtArgs>[]
      donationAppointments: Prisma.$DonationAppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      city: string
      latitude: number | null
      longitude: number | null
    }, ExtArgs["result"]["hospital"]>
    composites: {}
  }

  type HospitalGetPayload<S extends boolean | null | undefined | HospitalDefaultArgs> = $Result.GetResult<Prisma.$HospitalPayload, S>

  type HospitalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HospitalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HospitalCountAggregateInputType | true
    }

  export interface HospitalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hospital'], meta: { name: 'Hospital' } }
    /**
     * Find zero or one Hospital that matches the filter.
     * @param {HospitalFindUniqueArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HospitalFindUniqueArgs>(args: SelectSubset<T, HospitalFindUniqueArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hospital that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HospitalFindUniqueOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HospitalFindUniqueOrThrowArgs>(args: SelectSubset<T, HospitalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospital that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HospitalFindFirstArgs>(args?: SelectSubset<T, HospitalFindFirstArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospital that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HospitalFindFirstOrThrowArgs>(args?: SelectSubset<T, HospitalFindFirstOrThrowArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospitals
     * const hospitals = await prisma.hospital.findMany()
     * 
     * // Get first 10 Hospitals
     * const hospitals = await prisma.hospital.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hospitalWithIdOnly = await prisma.hospital.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HospitalFindManyArgs>(args?: SelectSubset<T, HospitalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hospital.
     * @param {HospitalCreateArgs} args - Arguments to create a Hospital.
     * @example
     * // Create one Hospital
     * const Hospital = await prisma.hospital.create({
     *   data: {
     *     // ... data to create a Hospital
     *   }
     * })
     * 
     */
    create<T extends HospitalCreateArgs>(args: SelectSubset<T, HospitalCreateArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hospitals.
     * @param {HospitalCreateManyArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospital = await prisma.hospital.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HospitalCreateManyArgs>(args?: SelectSubset<T, HospitalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hospitals and returns the data saved in the database.
     * @param {HospitalCreateManyAndReturnArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospital = await prisma.hospital.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hospitals and only return the `id`
     * const hospitalWithIdOnly = await prisma.hospital.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HospitalCreateManyAndReturnArgs>(args?: SelectSubset<T, HospitalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hospital.
     * @param {HospitalDeleteArgs} args - Arguments to delete one Hospital.
     * @example
     * // Delete one Hospital
     * const Hospital = await prisma.hospital.delete({
     *   where: {
     *     // ... filter to delete one Hospital
     *   }
     * })
     * 
     */
    delete<T extends HospitalDeleteArgs>(args: SelectSubset<T, HospitalDeleteArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hospital.
     * @param {HospitalUpdateArgs} args - Arguments to update one Hospital.
     * @example
     * // Update one Hospital
     * const hospital = await prisma.hospital.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HospitalUpdateArgs>(args: SelectSubset<T, HospitalUpdateArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hospitals.
     * @param {HospitalDeleteManyArgs} args - Arguments to filter Hospitals to delete.
     * @example
     * // Delete a few Hospitals
     * const { count } = await prisma.hospital.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HospitalDeleteManyArgs>(args?: SelectSubset<T, HospitalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HospitalUpdateManyArgs>(args: SelectSubset<T, HospitalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals and returns the data updated in the database.
     * @param {HospitalUpdateManyAndReturnArgs} args - Arguments to update many Hospitals.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hospitals and only return the `id`
     * const hospitalWithIdOnly = await prisma.hospital.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HospitalUpdateManyAndReturnArgs>(args: SelectSubset<T, HospitalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hospital.
     * @param {HospitalUpsertArgs} args - Arguments to update or create a Hospital.
     * @example
     * // Update or create a Hospital
     * const hospital = await prisma.hospital.upsert({
     *   create: {
     *     // ... data to create a Hospital
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospital we want to update
     *   }
     * })
     */
    upsert<T extends HospitalUpsertArgs>(args: SelectSubset<T, HospitalUpsertArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalCountArgs} args - Arguments to filter Hospitals to count.
     * @example
     * // Count the number of Hospitals
     * const count = await prisma.hospital.count({
     *   where: {
     *     // ... the filter for the Hospitals we want to count
     *   }
     * })
    **/
    count<T extends HospitalCountArgs>(
      args?: Subset<T, HospitalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HospitalAggregateArgs>(args: Subset<T, HospitalAggregateArgs>): Prisma.PrismaPromise<GetHospitalAggregateType<T>>

    /**
     * Group by Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HospitalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HospitalGroupByArgs['orderBy'] }
        : { orderBy?: HospitalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HospitalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hospital model
   */
  readonly fields: HospitalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hospital.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HospitalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Hospital$usersArgs<ExtArgs> = {}>(args?: Subset<T, Hospital$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bloodInventory<T extends Hospital$bloodInventoryArgs<ExtArgs> = {}>(args?: Subset<T, Hospital$bloodInventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bloodRequests<T extends Hospital$bloodRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Hospital$bloodRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventoryHistory<T extends Hospital$inventoryHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Hospital$inventoryHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donationAppointments<T extends Hospital$donationAppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Hospital$donationAppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationAppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hospital model
   */
  interface HospitalFieldRefs {
    readonly id: FieldRef<"Hospital", 'Int'>
    readonly name: FieldRef<"Hospital", 'String'>
    readonly city: FieldRef<"Hospital", 'String'>
    readonly latitude: FieldRef<"Hospital", 'Float'>
    readonly longitude: FieldRef<"Hospital", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Hospital findUnique
   */
  export type HospitalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital findUniqueOrThrow
   */
  export type HospitalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital findFirst
   */
  export type HospitalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital findFirstOrThrow
   */
  export type HospitalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital findMany
   */
  export type HospitalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospitals to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital create
   */
  export type HospitalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The data needed to create a Hospital.
     */
    data: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
  }

  /**
   * Hospital createMany
   */
  export type HospitalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hospitals.
     */
    data: HospitalCreateManyInput | HospitalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hospital createManyAndReturn
   */
  export type HospitalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The data used to create many Hospitals.
     */
    data: HospitalCreateManyInput | HospitalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hospital update
   */
  export type HospitalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The data needed to update a Hospital.
     */
    data: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
    /**
     * Choose, which Hospital to update.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital updateMany
   */
  export type HospitalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hospitals.
     */
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyInput>
    /**
     * Filter which Hospitals to update
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to update.
     */
    limit?: number
  }

  /**
   * Hospital updateManyAndReturn
   */
  export type HospitalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The data used to update Hospitals.
     */
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyInput>
    /**
     * Filter which Hospitals to update
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to update.
     */
    limit?: number
  }

  /**
   * Hospital upsert
   */
  export type HospitalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The filter to search for the Hospital to update in case it exists.
     */
    where: HospitalWhereUniqueInput
    /**
     * In case the Hospital found by the `where` argument doesn't exist, create a new Hospital with this data.
     */
    create: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
    /**
     * In case the Hospital was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
  }

  /**
   * Hospital delete
   */
  export type HospitalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter which Hospital to delete.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital deleteMany
   */
  export type HospitalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospitals to delete
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to delete.
     */
    limit?: number
  }

  /**
   * Hospital.users
   */
  export type Hospital$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Hospital.bloodInventory
   */
  export type Hospital$bloodInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodInventory
     */
    select?: BloodInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodInventory
     */
    omit?: BloodInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodInventoryInclude<ExtArgs> | null
    where?: BloodInventoryWhereInput
    orderBy?: BloodInventoryOrderByWithRelationInput | BloodInventoryOrderByWithRelationInput[]
    cursor?: BloodInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BloodInventoryScalarFieldEnum | BloodInventoryScalarFieldEnum[]
  }

  /**
   * Hospital.bloodRequests
   */
  export type Hospital$bloodRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    where?: BloodRequestWhereInput
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    cursor?: BloodRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }

  /**
   * Hospital.inventoryHistory
   */
  export type Hospital$inventoryHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryHistory
     */
    select?: InventoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryHistory
     */
    omit?: InventoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryHistoryInclude<ExtArgs> | null
    where?: InventoryHistoryWhereInput
    orderBy?: InventoryHistoryOrderByWithRelationInput | InventoryHistoryOrderByWithRelationInput[]
    cursor?: InventoryHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryHistoryScalarFieldEnum | InventoryHistoryScalarFieldEnum[]
  }

  /**
   * Hospital.donationAppointments
   */
  export type Hospital$donationAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationAppointment
     */
    select?: DonationAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationAppointment
     */
    omit?: DonationAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationAppointmentInclude<ExtArgs> | null
    where?: DonationAppointmentWhereInput
    orderBy?: DonationAppointmentOrderByWithRelationInput | DonationAppointmentOrderByWithRelationInput[]
    cursor?: DonationAppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationAppointmentScalarFieldEnum | DonationAppointmentScalarFieldEnum[]
  }

  /**
   * Hospital without action
   */
  export type HospitalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    hospitalId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    hospitalId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: string | null
    hospitalId: number | null
    bloodGroup: string | null
    aadharNumber: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: string | null
    hospitalId: number | null
    bloodGroup: string | null
    aadharNumber: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    role: number
    hospitalId: number
    bloodGroup: number
    aadharNumber: number
    latitude: number
    longitude: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    hospitalId?: true
    latitude?: true
    longitude?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    hospitalId?: true
    latitude?: true
    longitude?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    hospitalId?: true
    bloodGroup?: true
    aadharNumber?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    hospitalId?: true
    bloodGroup?: true
    aadharNumber?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    hospitalId?: true
    bloodGroup?: true
    aadharNumber?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    passwordHash: string
    name: string
    role: string
    hospitalId: number | null
    bloodGroup: string | null
    aadharNumber: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    hospitalId?: boolean
    bloodGroup?: boolean
    aadharNumber?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    hospital?: boolean | User$hospitalArgs<ExtArgs>
    bloodRequests?: boolean | User$bloodRequestsArgs<ExtArgs>
    inventoryHistory?: boolean | User$inventoryHistoryArgs<ExtArgs>
    donationAppointments?: boolean | User$donationAppointmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    hospitalId?: boolean
    bloodGroup?: boolean
    aadharNumber?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    hospital?: boolean | User$hospitalArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    hospitalId?: boolean
    bloodGroup?: boolean
    aadharNumber?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    hospital?: boolean | User$hospitalArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    hospitalId?: boolean
    bloodGroup?: boolean
    aadharNumber?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "role" | "hospitalId" | "bloodGroup" | "aadharNumber" | "latitude" | "longitude" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | User$hospitalArgs<ExtArgs>
    bloodRequests?: boolean | User$bloodRequestsArgs<ExtArgs>
    inventoryHistory?: boolean | User$inventoryHistoryArgs<ExtArgs>
    donationAppointments?: boolean | User$donationAppointmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | User$hospitalArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | User$hospitalArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      hospital: Prisma.$HospitalPayload<ExtArgs> | null
      bloodRequests: Prisma.$BloodRequestPayload<ExtArgs>[]
      inventoryHistory: Prisma.$InventoryHistoryPayload<ExtArgs>[]
      donationAppointments: Prisma.$DonationAppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      passwordHash: string
      name: string
      role: string
      hospitalId: number | null
      bloodGroup: string | null
      aadharNumber: string | null
      latitude: number | null
      longitude: number | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hospital<T extends User$hospitalArgs<ExtArgs> = {}>(args?: Subset<T, User$hospitalArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bloodRequests<T extends User$bloodRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$bloodRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventoryHistory<T extends User$inventoryHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$inventoryHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donationAppointments<T extends User$donationAppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$donationAppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationAppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly hospitalId: FieldRef<"User", 'Int'>
    readonly bloodGroup: FieldRef<"User", 'String'>
    readonly aadharNumber: FieldRef<"User", 'String'>
    readonly latitude: FieldRef<"User", 'Float'>
    readonly longitude: FieldRef<"User", 'Float'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.hospital
   */
  export type User$hospitalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    where?: HospitalWhereInput
  }

  /**
   * User.bloodRequests
   */
  export type User$bloodRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    where?: BloodRequestWhereInput
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    cursor?: BloodRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }

  /**
   * User.inventoryHistory
   */
  export type User$inventoryHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryHistory
     */
    select?: InventoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryHistory
     */
    omit?: InventoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryHistoryInclude<ExtArgs> | null
    where?: InventoryHistoryWhereInput
    orderBy?: InventoryHistoryOrderByWithRelationInput | InventoryHistoryOrderByWithRelationInput[]
    cursor?: InventoryHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryHistoryScalarFieldEnum | InventoryHistoryScalarFieldEnum[]
  }

  /**
   * User.donationAppointments
   */
  export type User$donationAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationAppointment
     */
    select?: DonationAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationAppointment
     */
    omit?: DonationAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationAppointmentInclude<ExtArgs> | null
    where?: DonationAppointmentWhereInput
    orderBy?: DonationAppointmentOrderByWithRelationInput | DonationAppointmentOrderByWithRelationInput[]
    cursor?: DonationAppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationAppointmentScalarFieldEnum | DonationAppointmentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model BloodInventory
   */

  export type AggregateBloodInventory = {
    _count: BloodInventoryCountAggregateOutputType | null
    _avg: BloodInventoryAvgAggregateOutputType | null
    _sum: BloodInventorySumAggregateOutputType | null
    _min: BloodInventoryMinAggregateOutputType | null
    _max: BloodInventoryMaxAggregateOutputType | null
  }

  export type BloodInventoryAvgAggregateOutputType = {
    id: number | null
    bankId: number | null
    units: number | null
  }

  export type BloodInventorySumAggregateOutputType = {
    id: number | null
    bankId: number | null
    units: number | null
  }

  export type BloodInventoryMinAggregateOutputType = {
    id: number | null
    bankId: number | null
    bloodGroup: string | null
    component: string | null
    units: number | null
    expiresOn: Date | null
    createdAt: Date | null
  }

  export type BloodInventoryMaxAggregateOutputType = {
    id: number | null
    bankId: number | null
    bloodGroup: string | null
    component: string | null
    units: number | null
    expiresOn: Date | null
    createdAt: Date | null
  }

  export type BloodInventoryCountAggregateOutputType = {
    id: number
    bankId: number
    bloodGroup: number
    component: number
    units: number
    expiresOn: number
    createdAt: number
    _all: number
  }


  export type BloodInventoryAvgAggregateInputType = {
    id?: true
    bankId?: true
    units?: true
  }

  export type BloodInventorySumAggregateInputType = {
    id?: true
    bankId?: true
    units?: true
  }

  export type BloodInventoryMinAggregateInputType = {
    id?: true
    bankId?: true
    bloodGroup?: true
    component?: true
    units?: true
    expiresOn?: true
    createdAt?: true
  }

  export type BloodInventoryMaxAggregateInputType = {
    id?: true
    bankId?: true
    bloodGroup?: true
    component?: true
    units?: true
    expiresOn?: true
    createdAt?: true
  }

  export type BloodInventoryCountAggregateInputType = {
    id?: true
    bankId?: true
    bloodGroup?: true
    component?: true
    units?: true
    expiresOn?: true
    createdAt?: true
    _all?: true
  }

  export type BloodInventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BloodInventory to aggregate.
     */
    where?: BloodInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodInventories to fetch.
     */
    orderBy?: BloodInventoryOrderByWithRelationInput | BloodInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BloodInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BloodInventories
    **/
    _count?: true | BloodInventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BloodInventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BloodInventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BloodInventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BloodInventoryMaxAggregateInputType
  }

  export type GetBloodInventoryAggregateType<T extends BloodInventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBloodInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBloodInventory[P]>
      : GetScalarType<T[P], AggregateBloodInventory[P]>
  }




  export type BloodInventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloodInventoryWhereInput
    orderBy?: BloodInventoryOrderByWithAggregationInput | BloodInventoryOrderByWithAggregationInput[]
    by: BloodInventoryScalarFieldEnum[] | BloodInventoryScalarFieldEnum
    having?: BloodInventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BloodInventoryCountAggregateInputType | true
    _avg?: BloodInventoryAvgAggregateInputType
    _sum?: BloodInventorySumAggregateInputType
    _min?: BloodInventoryMinAggregateInputType
    _max?: BloodInventoryMaxAggregateInputType
  }

  export type BloodInventoryGroupByOutputType = {
    id: number
    bankId: number
    bloodGroup: string
    component: string
    units: number
    expiresOn: Date
    createdAt: Date
    _count: BloodInventoryCountAggregateOutputType | null
    _avg: BloodInventoryAvgAggregateOutputType | null
    _sum: BloodInventorySumAggregateOutputType | null
    _min: BloodInventoryMinAggregateOutputType | null
    _max: BloodInventoryMaxAggregateOutputType | null
  }

  type GetBloodInventoryGroupByPayload<T extends BloodInventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BloodInventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BloodInventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BloodInventoryGroupByOutputType[P]>
            : GetScalarType<T[P], BloodInventoryGroupByOutputType[P]>
        }
      >
    >


  export type BloodInventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankId?: boolean
    bloodGroup?: boolean
    component?: boolean
    units?: boolean
    expiresOn?: boolean
    createdAt?: boolean
    bank?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodInventory"]>

  export type BloodInventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankId?: boolean
    bloodGroup?: boolean
    component?: boolean
    units?: boolean
    expiresOn?: boolean
    createdAt?: boolean
    bank?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodInventory"]>

  export type BloodInventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankId?: boolean
    bloodGroup?: boolean
    component?: boolean
    units?: boolean
    expiresOn?: boolean
    createdAt?: boolean
    bank?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodInventory"]>

  export type BloodInventorySelectScalar = {
    id?: boolean
    bankId?: boolean
    bloodGroup?: boolean
    component?: boolean
    units?: boolean
    expiresOn?: boolean
    createdAt?: boolean
  }

  export type BloodInventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bankId" | "bloodGroup" | "component" | "units" | "expiresOn" | "createdAt", ExtArgs["result"]["bloodInventory"]>
  export type BloodInventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank?: boolean | HospitalDefaultArgs<ExtArgs>
  }
  export type BloodInventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank?: boolean | HospitalDefaultArgs<ExtArgs>
  }
  export type BloodInventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank?: boolean | HospitalDefaultArgs<ExtArgs>
  }

  export type $BloodInventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BloodInventory"
    objects: {
      bank: Prisma.$HospitalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bankId: number
      bloodGroup: string
      component: string
      units: number
      expiresOn: Date
      createdAt: Date
    }, ExtArgs["result"]["bloodInventory"]>
    composites: {}
  }

  type BloodInventoryGetPayload<S extends boolean | null | undefined | BloodInventoryDefaultArgs> = $Result.GetResult<Prisma.$BloodInventoryPayload, S>

  type BloodInventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BloodInventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BloodInventoryCountAggregateInputType | true
    }

  export interface BloodInventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BloodInventory'], meta: { name: 'BloodInventory' } }
    /**
     * Find zero or one BloodInventory that matches the filter.
     * @param {BloodInventoryFindUniqueArgs} args - Arguments to find a BloodInventory
     * @example
     * // Get one BloodInventory
     * const bloodInventory = await prisma.bloodInventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BloodInventoryFindUniqueArgs>(args: SelectSubset<T, BloodInventoryFindUniqueArgs<ExtArgs>>): Prisma__BloodInventoryClient<$Result.GetResult<Prisma.$BloodInventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BloodInventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BloodInventoryFindUniqueOrThrowArgs} args - Arguments to find a BloodInventory
     * @example
     * // Get one BloodInventory
     * const bloodInventory = await prisma.bloodInventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BloodInventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BloodInventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BloodInventoryClient<$Result.GetResult<Prisma.$BloodInventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BloodInventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodInventoryFindFirstArgs} args - Arguments to find a BloodInventory
     * @example
     * // Get one BloodInventory
     * const bloodInventory = await prisma.bloodInventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BloodInventoryFindFirstArgs>(args?: SelectSubset<T, BloodInventoryFindFirstArgs<ExtArgs>>): Prisma__BloodInventoryClient<$Result.GetResult<Prisma.$BloodInventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BloodInventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodInventoryFindFirstOrThrowArgs} args - Arguments to find a BloodInventory
     * @example
     * // Get one BloodInventory
     * const bloodInventory = await prisma.bloodInventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BloodInventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BloodInventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BloodInventoryClient<$Result.GetResult<Prisma.$BloodInventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BloodInventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodInventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BloodInventories
     * const bloodInventories = await prisma.bloodInventory.findMany()
     * 
     * // Get first 10 BloodInventories
     * const bloodInventories = await prisma.bloodInventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bloodInventoryWithIdOnly = await prisma.bloodInventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BloodInventoryFindManyArgs>(args?: SelectSubset<T, BloodInventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BloodInventory.
     * @param {BloodInventoryCreateArgs} args - Arguments to create a BloodInventory.
     * @example
     * // Create one BloodInventory
     * const BloodInventory = await prisma.bloodInventory.create({
     *   data: {
     *     // ... data to create a BloodInventory
     *   }
     * })
     * 
     */
    create<T extends BloodInventoryCreateArgs>(args: SelectSubset<T, BloodInventoryCreateArgs<ExtArgs>>): Prisma__BloodInventoryClient<$Result.GetResult<Prisma.$BloodInventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BloodInventories.
     * @param {BloodInventoryCreateManyArgs} args - Arguments to create many BloodInventories.
     * @example
     * // Create many BloodInventories
     * const bloodInventory = await prisma.bloodInventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BloodInventoryCreateManyArgs>(args?: SelectSubset<T, BloodInventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BloodInventories and returns the data saved in the database.
     * @param {BloodInventoryCreateManyAndReturnArgs} args - Arguments to create many BloodInventories.
     * @example
     * // Create many BloodInventories
     * const bloodInventory = await prisma.bloodInventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BloodInventories and only return the `id`
     * const bloodInventoryWithIdOnly = await prisma.bloodInventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BloodInventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, BloodInventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodInventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BloodInventory.
     * @param {BloodInventoryDeleteArgs} args - Arguments to delete one BloodInventory.
     * @example
     * // Delete one BloodInventory
     * const BloodInventory = await prisma.bloodInventory.delete({
     *   where: {
     *     // ... filter to delete one BloodInventory
     *   }
     * })
     * 
     */
    delete<T extends BloodInventoryDeleteArgs>(args: SelectSubset<T, BloodInventoryDeleteArgs<ExtArgs>>): Prisma__BloodInventoryClient<$Result.GetResult<Prisma.$BloodInventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BloodInventory.
     * @param {BloodInventoryUpdateArgs} args - Arguments to update one BloodInventory.
     * @example
     * // Update one BloodInventory
     * const bloodInventory = await prisma.bloodInventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BloodInventoryUpdateArgs>(args: SelectSubset<T, BloodInventoryUpdateArgs<ExtArgs>>): Prisma__BloodInventoryClient<$Result.GetResult<Prisma.$BloodInventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BloodInventories.
     * @param {BloodInventoryDeleteManyArgs} args - Arguments to filter BloodInventories to delete.
     * @example
     * // Delete a few BloodInventories
     * const { count } = await prisma.bloodInventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BloodInventoryDeleteManyArgs>(args?: SelectSubset<T, BloodInventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BloodInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodInventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BloodInventories
     * const bloodInventory = await prisma.bloodInventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BloodInventoryUpdateManyArgs>(args: SelectSubset<T, BloodInventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BloodInventories and returns the data updated in the database.
     * @param {BloodInventoryUpdateManyAndReturnArgs} args - Arguments to update many BloodInventories.
     * @example
     * // Update many BloodInventories
     * const bloodInventory = await prisma.bloodInventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BloodInventories and only return the `id`
     * const bloodInventoryWithIdOnly = await prisma.bloodInventory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BloodInventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, BloodInventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodInventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BloodInventory.
     * @param {BloodInventoryUpsertArgs} args - Arguments to update or create a BloodInventory.
     * @example
     * // Update or create a BloodInventory
     * const bloodInventory = await prisma.bloodInventory.upsert({
     *   create: {
     *     // ... data to create a BloodInventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BloodInventory we want to update
     *   }
     * })
     */
    upsert<T extends BloodInventoryUpsertArgs>(args: SelectSubset<T, BloodInventoryUpsertArgs<ExtArgs>>): Prisma__BloodInventoryClient<$Result.GetResult<Prisma.$BloodInventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BloodInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodInventoryCountArgs} args - Arguments to filter BloodInventories to count.
     * @example
     * // Count the number of BloodInventories
     * const count = await prisma.bloodInventory.count({
     *   where: {
     *     // ... the filter for the BloodInventories we want to count
     *   }
     * })
    **/
    count<T extends BloodInventoryCountArgs>(
      args?: Subset<T, BloodInventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BloodInventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BloodInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodInventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BloodInventoryAggregateArgs>(args: Subset<T, BloodInventoryAggregateArgs>): Prisma.PrismaPromise<GetBloodInventoryAggregateType<T>>

    /**
     * Group by BloodInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodInventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BloodInventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BloodInventoryGroupByArgs['orderBy'] }
        : { orderBy?: BloodInventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BloodInventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloodInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BloodInventory model
   */
  readonly fields: BloodInventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BloodInventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BloodInventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bank<T extends HospitalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HospitalDefaultArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BloodInventory model
   */
  interface BloodInventoryFieldRefs {
    readonly id: FieldRef<"BloodInventory", 'Int'>
    readonly bankId: FieldRef<"BloodInventory", 'Int'>
    readonly bloodGroup: FieldRef<"BloodInventory", 'String'>
    readonly component: FieldRef<"BloodInventory", 'String'>
    readonly units: FieldRef<"BloodInventory", 'Int'>
    readonly expiresOn: FieldRef<"BloodInventory", 'DateTime'>
    readonly createdAt: FieldRef<"BloodInventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BloodInventory findUnique
   */
  export type BloodInventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodInventory
     */
    select?: BloodInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodInventory
     */
    omit?: BloodInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodInventoryInclude<ExtArgs> | null
    /**
     * Filter, which BloodInventory to fetch.
     */
    where: BloodInventoryWhereUniqueInput
  }

  /**
   * BloodInventory findUniqueOrThrow
   */
  export type BloodInventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodInventory
     */
    select?: BloodInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodInventory
     */
    omit?: BloodInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodInventoryInclude<ExtArgs> | null
    /**
     * Filter, which BloodInventory to fetch.
     */
    where: BloodInventoryWhereUniqueInput
  }

  /**
   * BloodInventory findFirst
   */
  export type BloodInventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodInventory
     */
    select?: BloodInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodInventory
     */
    omit?: BloodInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodInventoryInclude<ExtArgs> | null
    /**
     * Filter, which BloodInventory to fetch.
     */
    where?: BloodInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodInventories to fetch.
     */
    orderBy?: BloodInventoryOrderByWithRelationInput | BloodInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BloodInventories.
     */
    cursor?: BloodInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloodInventories.
     */
    distinct?: BloodInventoryScalarFieldEnum | BloodInventoryScalarFieldEnum[]
  }

  /**
   * BloodInventory findFirstOrThrow
   */
  export type BloodInventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodInventory
     */
    select?: BloodInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodInventory
     */
    omit?: BloodInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodInventoryInclude<ExtArgs> | null
    /**
     * Filter, which BloodInventory to fetch.
     */
    where?: BloodInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodInventories to fetch.
     */
    orderBy?: BloodInventoryOrderByWithRelationInput | BloodInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BloodInventories.
     */
    cursor?: BloodInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloodInventories.
     */
    distinct?: BloodInventoryScalarFieldEnum | BloodInventoryScalarFieldEnum[]
  }

  /**
   * BloodInventory findMany
   */
  export type BloodInventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodInventory
     */
    select?: BloodInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodInventory
     */
    omit?: BloodInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodInventoryInclude<ExtArgs> | null
    /**
     * Filter, which BloodInventories to fetch.
     */
    where?: BloodInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodInventories to fetch.
     */
    orderBy?: BloodInventoryOrderByWithRelationInput | BloodInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BloodInventories.
     */
    cursor?: BloodInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloodInventories.
     */
    distinct?: BloodInventoryScalarFieldEnum | BloodInventoryScalarFieldEnum[]
  }

  /**
   * BloodInventory create
   */
  export type BloodInventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodInventory
     */
    select?: BloodInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodInventory
     */
    omit?: BloodInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodInventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BloodInventory.
     */
    data: XOR<BloodInventoryCreateInput, BloodInventoryUncheckedCreateInput>
  }

  /**
   * BloodInventory createMany
   */
  export type BloodInventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BloodInventories.
     */
    data: BloodInventoryCreateManyInput | BloodInventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BloodInventory createManyAndReturn
   */
  export type BloodInventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodInventory
     */
    select?: BloodInventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BloodInventory
     */
    omit?: BloodInventoryOmit<ExtArgs> | null
    /**
     * The data used to create many BloodInventories.
     */
    data: BloodInventoryCreateManyInput | BloodInventoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodInventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BloodInventory update
   */
  export type BloodInventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodInventory
     */
    select?: BloodInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodInventory
     */
    omit?: BloodInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodInventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BloodInventory.
     */
    data: XOR<BloodInventoryUpdateInput, BloodInventoryUncheckedUpdateInput>
    /**
     * Choose, which BloodInventory to update.
     */
    where: BloodInventoryWhereUniqueInput
  }

  /**
   * BloodInventory updateMany
   */
  export type BloodInventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BloodInventories.
     */
    data: XOR<BloodInventoryUpdateManyMutationInput, BloodInventoryUncheckedUpdateManyInput>
    /**
     * Filter which BloodInventories to update
     */
    where?: BloodInventoryWhereInput
    /**
     * Limit how many BloodInventories to update.
     */
    limit?: number
  }

  /**
   * BloodInventory updateManyAndReturn
   */
  export type BloodInventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodInventory
     */
    select?: BloodInventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BloodInventory
     */
    omit?: BloodInventoryOmit<ExtArgs> | null
    /**
     * The data used to update BloodInventories.
     */
    data: XOR<BloodInventoryUpdateManyMutationInput, BloodInventoryUncheckedUpdateManyInput>
    /**
     * Filter which BloodInventories to update
     */
    where?: BloodInventoryWhereInput
    /**
     * Limit how many BloodInventories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodInventoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BloodInventory upsert
   */
  export type BloodInventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodInventory
     */
    select?: BloodInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodInventory
     */
    omit?: BloodInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodInventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BloodInventory to update in case it exists.
     */
    where: BloodInventoryWhereUniqueInput
    /**
     * In case the BloodInventory found by the `where` argument doesn't exist, create a new BloodInventory with this data.
     */
    create: XOR<BloodInventoryCreateInput, BloodInventoryUncheckedCreateInput>
    /**
     * In case the BloodInventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BloodInventoryUpdateInput, BloodInventoryUncheckedUpdateInput>
  }

  /**
   * BloodInventory delete
   */
  export type BloodInventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodInventory
     */
    select?: BloodInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodInventory
     */
    omit?: BloodInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodInventoryInclude<ExtArgs> | null
    /**
     * Filter which BloodInventory to delete.
     */
    where: BloodInventoryWhereUniqueInput
  }

  /**
   * BloodInventory deleteMany
   */
  export type BloodInventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BloodInventories to delete
     */
    where?: BloodInventoryWhereInput
    /**
     * Limit how many BloodInventories to delete.
     */
    limit?: number
  }

  /**
   * BloodInventory without action
   */
  export type BloodInventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodInventory
     */
    select?: BloodInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodInventory
     */
    omit?: BloodInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodInventoryInclude<ExtArgs> | null
  }


  /**
   * Model BloodRequest
   */

  export type AggregateBloodRequest = {
    _count: BloodRequestCountAggregateOutputType | null
    _avg: BloodRequestAvgAggregateOutputType | null
    _sum: BloodRequestSumAggregateOutputType | null
    _min: BloodRequestMinAggregateOutputType | null
    _max: BloodRequestMaxAggregateOutputType | null
  }

  export type BloodRequestAvgAggregateOutputType = {
    id: number | null
    requesterId: number | null
    hospitalId: number | null
    units: number | null
  }

  export type BloodRequestSumAggregateOutputType = {
    id: number | null
    requesterId: number | null
    hospitalId: number | null
    units: number | null
  }

  export type BloodRequestMinAggregateOutputType = {
    id: number | null
    requesterId: number | null
    hospitalId: number | null
    bloodGroup: string | null
    units: number | null
    urgency: string | null
    status: string | null
    token: string | null
    createdAt: Date | null
  }

  export type BloodRequestMaxAggregateOutputType = {
    id: number | null
    requesterId: number | null
    hospitalId: number | null
    bloodGroup: string | null
    units: number | null
    urgency: string | null
    status: string | null
    token: string | null
    createdAt: Date | null
  }

  export type BloodRequestCountAggregateOutputType = {
    id: number
    requesterId: number
    hospitalId: number
    bloodGroup: number
    units: number
    urgency: number
    status: number
    token: number
    createdAt: number
    _all: number
  }


  export type BloodRequestAvgAggregateInputType = {
    id?: true
    requesterId?: true
    hospitalId?: true
    units?: true
  }

  export type BloodRequestSumAggregateInputType = {
    id?: true
    requesterId?: true
    hospitalId?: true
    units?: true
  }

  export type BloodRequestMinAggregateInputType = {
    id?: true
    requesterId?: true
    hospitalId?: true
    bloodGroup?: true
    units?: true
    urgency?: true
    status?: true
    token?: true
    createdAt?: true
  }

  export type BloodRequestMaxAggregateInputType = {
    id?: true
    requesterId?: true
    hospitalId?: true
    bloodGroup?: true
    units?: true
    urgency?: true
    status?: true
    token?: true
    createdAt?: true
  }

  export type BloodRequestCountAggregateInputType = {
    id?: true
    requesterId?: true
    hospitalId?: true
    bloodGroup?: true
    units?: true
    urgency?: true
    status?: true
    token?: true
    createdAt?: true
    _all?: true
  }

  export type BloodRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BloodRequest to aggregate.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BloodRequests
    **/
    _count?: true | BloodRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BloodRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BloodRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BloodRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BloodRequestMaxAggregateInputType
  }

  export type GetBloodRequestAggregateType<T extends BloodRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateBloodRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBloodRequest[P]>
      : GetScalarType<T[P], AggregateBloodRequest[P]>
  }




  export type BloodRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloodRequestWhereInput
    orderBy?: BloodRequestOrderByWithAggregationInput | BloodRequestOrderByWithAggregationInput[]
    by: BloodRequestScalarFieldEnum[] | BloodRequestScalarFieldEnum
    having?: BloodRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BloodRequestCountAggregateInputType | true
    _avg?: BloodRequestAvgAggregateInputType
    _sum?: BloodRequestSumAggregateInputType
    _min?: BloodRequestMinAggregateInputType
    _max?: BloodRequestMaxAggregateInputType
  }

  export type BloodRequestGroupByOutputType = {
    id: number
    requesterId: number | null
    hospitalId: number
    bloodGroup: string
    units: number
    urgency: string
    status: string
    token: string | null
    createdAt: Date
    _count: BloodRequestCountAggregateOutputType | null
    _avg: BloodRequestAvgAggregateOutputType | null
    _sum: BloodRequestSumAggregateOutputType | null
    _min: BloodRequestMinAggregateOutputType | null
    _max: BloodRequestMaxAggregateOutputType | null
  }

  type GetBloodRequestGroupByPayload<T extends BloodRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BloodRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BloodRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BloodRequestGroupByOutputType[P]>
            : GetScalarType<T[P], BloodRequestGroupByOutputType[P]>
        }
      >
    >


  export type BloodRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    hospitalId?: boolean
    bloodGroup?: boolean
    units?: boolean
    urgency?: boolean
    status?: boolean
    token?: boolean
    createdAt?: boolean
    requester?: boolean | BloodRequest$requesterArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodRequest"]>

  export type BloodRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    hospitalId?: boolean
    bloodGroup?: boolean
    units?: boolean
    urgency?: boolean
    status?: boolean
    token?: boolean
    createdAt?: boolean
    requester?: boolean | BloodRequest$requesterArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodRequest"]>

  export type BloodRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    hospitalId?: boolean
    bloodGroup?: boolean
    units?: boolean
    urgency?: boolean
    status?: boolean
    token?: boolean
    createdAt?: boolean
    requester?: boolean | BloodRequest$requesterArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodRequest"]>

  export type BloodRequestSelectScalar = {
    id?: boolean
    requesterId?: boolean
    hospitalId?: boolean
    bloodGroup?: boolean
    units?: boolean
    urgency?: boolean
    status?: boolean
    token?: boolean
    createdAt?: boolean
  }

  export type BloodRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requesterId" | "hospitalId" | "bloodGroup" | "units" | "urgency" | "status" | "token" | "createdAt", ExtArgs["result"]["bloodRequest"]>
  export type BloodRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | BloodRequest$requesterArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }
  export type BloodRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | BloodRequest$requesterArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }
  export type BloodRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | BloodRequest$requesterArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }

  export type $BloodRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BloodRequest"
    objects: {
      requester: Prisma.$UserPayload<ExtArgs> | null
      hospital: Prisma.$HospitalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      requesterId: number | null
      hospitalId: number
      bloodGroup: string
      units: number
      urgency: string
      status: string
      token: string | null
      createdAt: Date
    }, ExtArgs["result"]["bloodRequest"]>
    composites: {}
  }

  type BloodRequestGetPayload<S extends boolean | null | undefined | BloodRequestDefaultArgs> = $Result.GetResult<Prisma.$BloodRequestPayload, S>

  type BloodRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BloodRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BloodRequestCountAggregateInputType | true
    }

  export interface BloodRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BloodRequest'], meta: { name: 'BloodRequest' } }
    /**
     * Find zero or one BloodRequest that matches the filter.
     * @param {BloodRequestFindUniqueArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BloodRequestFindUniqueArgs>(args: SelectSubset<T, BloodRequestFindUniqueArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BloodRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BloodRequestFindUniqueOrThrowArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BloodRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, BloodRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BloodRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestFindFirstArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BloodRequestFindFirstArgs>(args?: SelectSubset<T, BloodRequestFindFirstArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BloodRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestFindFirstOrThrowArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BloodRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, BloodRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BloodRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BloodRequests
     * const bloodRequests = await prisma.bloodRequest.findMany()
     * 
     * // Get first 10 BloodRequests
     * const bloodRequests = await prisma.bloodRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bloodRequestWithIdOnly = await prisma.bloodRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BloodRequestFindManyArgs>(args?: SelectSubset<T, BloodRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BloodRequest.
     * @param {BloodRequestCreateArgs} args - Arguments to create a BloodRequest.
     * @example
     * // Create one BloodRequest
     * const BloodRequest = await prisma.bloodRequest.create({
     *   data: {
     *     // ... data to create a BloodRequest
     *   }
     * })
     * 
     */
    create<T extends BloodRequestCreateArgs>(args: SelectSubset<T, BloodRequestCreateArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BloodRequests.
     * @param {BloodRequestCreateManyArgs} args - Arguments to create many BloodRequests.
     * @example
     * // Create many BloodRequests
     * const bloodRequest = await prisma.bloodRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BloodRequestCreateManyArgs>(args?: SelectSubset<T, BloodRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BloodRequests and returns the data saved in the database.
     * @param {BloodRequestCreateManyAndReturnArgs} args - Arguments to create many BloodRequests.
     * @example
     * // Create many BloodRequests
     * const bloodRequest = await prisma.bloodRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BloodRequests and only return the `id`
     * const bloodRequestWithIdOnly = await prisma.bloodRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BloodRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, BloodRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BloodRequest.
     * @param {BloodRequestDeleteArgs} args - Arguments to delete one BloodRequest.
     * @example
     * // Delete one BloodRequest
     * const BloodRequest = await prisma.bloodRequest.delete({
     *   where: {
     *     // ... filter to delete one BloodRequest
     *   }
     * })
     * 
     */
    delete<T extends BloodRequestDeleteArgs>(args: SelectSubset<T, BloodRequestDeleteArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BloodRequest.
     * @param {BloodRequestUpdateArgs} args - Arguments to update one BloodRequest.
     * @example
     * // Update one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BloodRequestUpdateArgs>(args: SelectSubset<T, BloodRequestUpdateArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BloodRequests.
     * @param {BloodRequestDeleteManyArgs} args - Arguments to filter BloodRequests to delete.
     * @example
     * // Delete a few BloodRequests
     * const { count } = await prisma.bloodRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BloodRequestDeleteManyArgs>(args?: SelectSubset<T, BloodRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BloodRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BloodRequests
     * const bloodRequest = await prisma.bloodRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BloodRequestUpdateManyArgs>(args: SelectSubset<T, BloodRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BloodRequests and returns the data updated in the database.
     * @param {BloodRequestUpdateManyAndReturnArgs} args - Arguments to update many BloodRequests.
     * @example
     * // Update many BloodRequests
     * const bloodRequest = await prisma.bloodRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BloodRequests and only return the `id`
     * const bloodRequestWithIdOnly = await prisma.bloodRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BloodRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, BloodRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BloodRequest.
     * @param {BloodRequestUpsertArgs} args - Arguments to update or create a BloodRequest.
     * @example
     * // Update or create a BloodRequest
     * const bloodRequest = await prisma.bloodRequest.upsert({
     *   create: {
     *     // ... data to create a BloodRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BloodRequest we want to update
     *   }
     * })
     */
    upsert<T extends BloodRequestUpsertArgs>(args: SelectSubset<T, BloodRequestUpsertArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BloodRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestCountArgs} args - Arguments to filter BloodRequests to count.
     * @example
     * // Count the number of BloodRequests
     * const count = await prisma.bloodRequest.count({
     *   where: {
     *     // ... the filter for the BloodRequests we want to count
     *   }
     * })
    **/
    count<T extends BloodRequestCountArgs>(
      args?: Subset<T, BloodRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BloodRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BloodRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BloodRequestAggregateArgs>(args: Subset<T, BloodRequestAggregateArgs>): Prisma.PrismaPromise<GetBloodRequestAggregateType<T>>

    /**
     * Group by BloodRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BloodRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BloodRequestGroupByArgs['orderBy'] }
        : { orderBy?: BloodRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BloodRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloodRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BloodRequest model
   */
  readonly fields: BloodRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BloodRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BloodRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requester<T extends BloodRequest$requesterArgs<ExtArgs> = {}>(args?: Subset<T, BloodRequest$requesterArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    hospital<T extends HospitalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HospitalDefaultArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BloodRequest model
   */
  interface BloodRequestFieldRefs {
    readonly id: FieldRef<"BloodRequest", 'Int'>
    readonly requesterId: FieldRef<"BloodRequest", 'Int'>
    readonly hospitalId: FieldRef<"BloodRequest", 'Int'>
    readonly bloodGroup: FieldRef<"BloodRequest", 'String'>
    readonly units: FieldRef<"BloodRequest", 'Int'>
    readonly urgency: FieldRef<"BloodRequest", 'String'>
    readonly status: FieldRef<"BloodRequest", 'String'>
    readonly token: FieldRef<"BloodRequest", 'String'>
    readonly createdAt: FieldRef<"BloodRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BloodRequest findUnique
   */
  export type BloodRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where: BloodRequestWhereUniqueInput
  }

  /**
   * BloodRequest findUniqueOrThrow
   */
  export type BloodRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where: BloodRequestWhereUniqueInput
  }

  /**
   * BloodRequest findFirst
   */
  export type BloodRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BloodRequests.
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloodRequests.
     */
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }

  /**
   * BloodRequest findFirstOrThrow
   */
  export type BloodRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BloodRequests.
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloodRequests.
     */
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }

  /**
   * BloodRequest findMany
   */
  export type BloodRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequests to fetch.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BloodRequests.
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloodRequests.
     */
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }

  /**
   * BloodRequest create
   */
  export type BloodRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a BloodRequest.
     */
    data: XOR<BloodRequestCreateInput, BloodRequestUncheckedCreateInput>
  }

  /**
   * BloodRequest createMany
   */
  export type BloodRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BloodRequests.
     */
    data: BloodRequestCreateManyInput | BloodRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BloodRequest createManyAndReturn
   */
  export type BloodRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * The data used to create many BloodRequests.
     */
    data: BloodRequestCreateManyInput | BloodRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BloodRequest update
   */
  export type BloodRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a BloodRequest.
     */
    data: XOR<BloodRequestUpdateInput, BloodRequestUncheckedUpdateInput>
    /**
     * Choose, which BloodRequest to update.
     */
    where: BloodRequestWhereUniqueInput
  }

  /**
   * BloodRequest updateMany
   */
  export type BloodRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BloodRequests.
     */
    data: XOR<BloodRequestUpdateManyMutationInput, BloodRequestUncheckedUpdateManyInput>
    /**
     * Filter which BloodRequests to update
     */
    where?: BloodRequestWhereInput
    /**
     * Limit how many BloodRequests to update.
     */
    limit?: number
  }

  /**
   * BloodRequest updateManyAndReturn
   */
  export type BloodRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * The data used to update BloodRequests.
     */
    data: XOR<BloodRequestUpdateManyMutationInput, BloodRequestUncheckedUpdateManyInput>
    /**
     * Filter which BloodRequests to update
     */
    where?: BloodRequestWhereInput
    /**
     * Limit how many BloodRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BloodRequest upsert
   */
  export type BloodRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the BloodRequest to update in case it exists.
     */
    where: BloodRequestWhereUniqueInput
    /**
     * In case the BloodRequest found by the `where` argument doesn't exist, create a new BloodRequest with this data.
     */
    create: XOR<BloodRequestCreateInput, BloodRequestUncheckedCreateInput>
    /**
     * In case the BloodRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BloodRequestUpdateInput, BloodRequestUncheckedUpdateInput>
  }

  /**
   * BloodRequest delete
   */
  export type BloodRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter which BloodRequest to delete.
     */
    where: BloodRequestWhereUniqueInput
  }

  /**
   * BloodRequest deleteMany
   */
  export type BloodRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BloodRequests to delete
     */
    where?: BloodRequestWhereInput
    /**
     * Limit how many BloodRequests to delete.
     */
    limit?: number
  }

  /**
   * BloodRequest.requester
   */
  export type BloodRequest$requesterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * BloodRequest without action
   */
  export type BloodRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
  }


  /**
   * Model InventoryHistory
   */

  export type AggregateInventoryHistory = {
    _count: InventoryHistoryCountAggregateOutputType | null
    _avg: InventoryHistoryAvgAggregateOutputType | null
    _sum: InventoryHistorySumAggregateOutputType | null
    _min: InventoryHistoryMinAggregateOutputType | null
    _max: InventoryHistoryMaxAggregateOutputType | null
  }

  export type InventoryHistoryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    units: number | null
    bankId: number | null
  }

  export type InventoryHistorySumAggregateOutputType = {
    id: number | null
    userId: number | null
    units: number | null
    bankId: number | null
  }

  export type InventoryHistoryMinAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    bloodGroup: string | null
    component: string | null
    units: number | null
    bankId: number | null
    createdAt: Date | null
  }

  export type InventoryHistoryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    bloodGroup: string | null
    component: string | null
    units: number | null
    bankId: number | null
    createdAt: Date | null
  }

  export type InventoryHistoryCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    bloodGroup: number
    component: number
    units: number
    bankId: number
    createdAt: number
    _all: number
  }


  export type InventoryHistoryAvgAggregateInputType = {
    id?: true
    userId?: true
    units?: true
    bankId?: true
  }

  export type InventoryHistorySumAggregateInputType = {
    id?: true
    userId?: true
    units?: true
    bankId?: true
  }

  export type InventoryHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    bloodGroup?: true
    component?: true
    units?: true
    bankId?: true
    createdAt?: true
  }

  export type InventoryHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    bloodGroup?: true
    component?: true
    units?: true
    bankId?: true
    createdAt?: true
  }

  export type InventoryHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    bloodGroup?: true
    component?: true
    units?: true
    bankId?: true
    createdAt?: true
    _all?: true
  }

  export type InventoryHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryHistory to aggregate.
     */
    where?: InventoryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryHistories to fetch.
     */
    orderBy?: InventoryHistoryOrderByWithRelationInput | InventoryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryHistories
    **/
    _count?: true | InventoryHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryHistoryMaxAggregateInputType
  }

  export type GetInventoryHistoryAggregateType<T extends InventoryHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryHistory[P]>
      : GetScalarType<T[P], AggregateInventoryHistory[P]>
  }




  export type InventoryHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryHistoryWhereInput
    orderBy?: InventoryHistoryOrderByWithAggregationInput | InventoryHistoryOrderByWithAggregationInput[]
    by: InventoryHistoryScalarFieldEnum[] | InventoryHistoryScalarFieldEnum
    having?: InventoryHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryHistoryCountAggregateInputType | true
    _avg?: InventoryHistoryAvgAggregateInputType
    _sum?: InventoryHistorySumAggregateInputType
    _min?: InventoryHistoryMinAggregateInputType
    _max?: InventoryHistoryMaxAggregateInputType
  }

  export type InventoryHistoryGroupByOutputType = {
    id: number
    userId: number | null
    action: string
    bloodGroup: string
    component: string
    units: number
    bankId: number
    createdAt: Date
    _count: InventoryHistoryCountAggregateOutputType | null
    _avg: InventoryHistoryAvgAggregateOutputType | null
    _sum: InventoryHistorySumAggregateOutputType | null
    _min: InventoryHistoryMinAggregateOutputType | null
    _max: InventoryHistoryMaxAggregateOutputType | null
  }

  type GetInventoryHistoryGroupByPayload<T extends InventoryHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryHistoryGroupByOutputType[P]>
        }
      >
    >


  export type InventoryHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    bloodGroup?: boolean
    component?: boolean
    units?: boolean
    bankId?: boolean
    createdAt?: boolean
    user?: boolean | InventoryHistory$userArgs<ExtArgs>
    bank?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryHistory"]>

  export type InventoryHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    bloodGroup?: boolean
    component?: boolean
    units?: boolean
    bankId?: boolean
    createdAt?: boolean
    user?: boolean | InventoryHistory$userArgs<ExtArgs>
    bank?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryHistory"]>

  export type InventoryHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    bloodGroup?: boolean
    component?: boolean
    units?: boolean
    bankId?: boolean
    createdAt?: boolean
    user?: boolean | InventoryHistory$userArgs<ExtArgs>
    bank?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryHistory"]>

  export type InventoryHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    bloodGroup?: boolean
    component?: boolean
    units?: boolean
    bankId?: boolean
    createdAt?: boolean
  }

  export type InventoryHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "bloodGroup" | "component" | "units" | "bankId" | "createdAt", ExtArgs["result"]["inventoryHistory"]>
  export type InventoryHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | InventoryHistory$userArgs<ExtArgs>
    bank?: boolean | HospitalDefaultArgs<ExtArgs>
  }
  export type InventoryHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | InventoryHistory$userArgs<ExtArgs>
    bank?: boolean | HospitalDefaultArgs<ExtArgs>
  }
  export type InventoryHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | InventoryHistory$userArgs<ExtArgs>
    bank?: boolean | HospitalDefaultArgs<ExtArgs>
  }

  export type $InventoryHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      bank: Prisma.$HospitalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      action: string
      bloodGroup: string
      component: string
      units: number
      bankId: number
      createdAt: Date
    }, ExtArgs["result"]["inventoryHistory"]>
    composites: {}
  }

  type InventoryHistoryGetPayload<S extends boolean | null | undefined | InventoryHistoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryHistoryPayload, S>

  type InventoryHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryHistoryCountAggregateInputType | true
    }

  export interface InventoryHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryHistory'], meta: { name: 'InventoryHistory' } }
    /**
     * Find zero or one InventoryHistory that matches the filter.
     * @param {InventoryHistoryFindUniqueArgs} args - Arguments to find a InventoryHistory
     * @example
     * // Get one InventoryHistory
     * const inventoryHistory = await prisma.inventoryHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryHistoryFindUniqueArgs>(args: SelectSubset<T, InventoryHistoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryHistoryClient<$Result.GetResult<Prisma.$InventoryHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryHistoryFindUniqueOrThrowArgs} args - Arguments to find a InventoryHistory
     * @example
     * // Get one InventoryHistory
     * const inventoryHistory = await prisma.inventoryHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryHistoryClient<$Result.GetResult<Prisma.$InventoryHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryHistoryFindFirstArgs} args - Arguments to find a InventoryHistory
     * @example
     * // Get one InventoryHistory
     * const inventoryHistory = await prisma.inventoryHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryHistoryFindFirstArgs>(args?: SelectSubset<T, InventoryHistoryFindFirstArgs<ExtArgs>>): Prisma__InventoryHistoryClient<$Result.GetResult<Prisma.$InventoryHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryHistoryFindFirstOrThrowArgs} args - Arguments to find a InventoryHistory
     * @example
     * // Get one InventoryHistory
     * const inventoryHistory = await prisma.inventoryHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryHistoryClient<$Result.GetResult<Prisma.$InventoryHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryHistories
     * const inventoryHistories = await prisma.inventoryHistory.findMany()
     * 
     * // Get first 10 InventoryHistories
     * const inventoryHistories = await prisma.inventoryHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryHistoryWithIdOnly = await prisma.inventoryHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryHistoryFindManyArgs>(args?: SelectSubset<T, InventoryHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryHistory.
     * @param {InventoryHistoryCreateArgs} args - Arguments to create a InventoryHistory.
     * @example
     * // Create one InventoryHistory
     * const InventoryHistory = await prisma.inventoryHistory.create({
     *   data: {
     *     // ... data to create a InventoryHistory
     *   }
     * })
     * 
     */
    create<T extends InventoryHistoryCreateArgs>(args: SelectSubset<T, InventoryHistoryCreateArgs<ExtArgs>>): Prisma__InventoryHistoryClient<$Result.GetResult<Prisma.$InventoryHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryHistories.
     * @param {InventoryHistoryCreateManyArgs} args - Arguments to create many InventoryHistories.
     * @example
     * // Create many InventoryHistories
     * const inventoryHistory = await prisma.inventoryHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryHistoryCreateManyArgs>(args?: SelectSubset<T, InventoryHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryHistories and returns the data saved in the database.
     * @param {InventoryHistoryCreateManyAndReturnArgs} args - Arguments to create many InventoryHistories.
     * @example
     * // Create many InventoryHistories
     * const inventoryHistory = await prisma.inventoryHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryHistories and only return the `id`
     * const inventoryHistoryWithIdOnly = await prisma.inventoryHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InventoryHistory.
     * @param {InventoryHistoryDeleteArgs} args - Arguments to delete one InventoryHistory.
     * @example
     * // Delete one InventoryHistory
     * const InventoryHistory = await prisma.inventoryHistory.delete({
     *   where: {
     *     // ... filter to delete one InventoryHistory
     *   }
     * })
     * 
     */
    delete<T extends InventoryHistoryDeleteArgs>(args: SelectSubset<T, InventoryHistoryDeleteArgs<ExtArgs>>): Prisma__InventoryHistoryClient<$Result.GetResult<Prisma.$InventoryHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryHistory.
     * @param {InventoryHistoryUpdateArgs} args - Arguments to update one InventoryHistory.
     * @example
     * // Update one InventoryHistory
     * const inventoryHistory = await prisma.inventoryHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryHistoryUpdateArgs>(args: SelectSubset<T, InventoryHistoryUpdateArgs<ExtArgs>>): Prisma__InventoryHistoryClient<$Result.GetResult<Prisma.$InventoryHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryHistories.
     * @param {InventoryHistoryDeleteManyArgs} args - Arguments to filter InventoryHistories to delete.
     * @example
     * // Delete a few InventoryHistories
     * const { count } = await prisma.inventoryHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryHistoryDeleteManyArgs>(args?: SelectSubset<T, InventoryHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryHistories
     * const inventoryHistory = await prisma.inventoryHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryHistoryUpdateManyArgs>(args: SelectSubset<T, InventoryHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryHistories and returns the data updated in the database.
     * @param {InventoryHistoryUpdateManyAndReturnArgs} args - Arguments to update many InventoryHistories.
     * @example
     * // Update many InventoryHistories
     * const inventoryHistory = await prisma.inventoryHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InventoryHistories and only return the `id`
     * const inventoryHistoryWithIdOnly = await prisma.inventoryHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InventoryHistory.
     * @param {InventoryHistoryUpsertArgs} args - Arguments to update or create a InventoryHistory.
     * @example
     * // Update or create a InventoryHistory
     * const inventoryHistory = await prisma.inventoryHistory.upsert({
     *   create: {
     *     // ... data to create a InventoryHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryHistory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryHistoryUpsertArgs>(args: SelectSubset<T, InventoryHistoryUpsertArgs<ExtArgs>>): Prisma__InventoryHistoryClient<$Result.GetResult<Prisma.$InventoryHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryHistoryCountArgs} args - Arguments to filter InventoryHistories to count.
     * @example
     * // Count the number of InventoryHistories
     * const count = await prisma.inventoryHistory.count({
     *   where: {
     *     // ... the filter for the InventoryHistories we want to count
     *   }
     * })
    **/
    count<T extends InventoryHistoryCountArgs>(
      args?: Subset<T, InventoryHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryHistoryAggregateArgs>(args: Subset<T, InventoryHistoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryHistoryAggregateType<T>>

    /**
     * Group by InventoryHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryHistoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryHistory model
   */
  readonly fields: InventoryHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends InventoryHistory$userArgs<ExtArgs> = {}>(args?: Subset<T, InventoryHistory$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bank<T extends HospitalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HospitalDefaultArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryHistory model
   */
  interface InventoryHistoryFieldRefs {
    readonly id: FieldRef<"InventoryHistory", 'Int'>
    readonly userId: FieldRef<"InventoryHistory", 'Int'>
    readonly action: FieldRef<"InventoryHistory", 'String'>
    readonly bloodGroup: FieldRef<"InventoryHistory", 'String'>
    readonly component: FieldRef<"InventoryHistory", 'String'>
    readonly units: FieldRef<"InventoryHistory", 'Int'>
    readonly bankId: FieldRef<"InventoryHistory", 'Int'>
    readonly createdAt: FieldRef<"InventoryHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryHistory findUnique
   */
  export type InventoryHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryHistory
     */
    select?: InventoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryHistory
     */
    omit?: InventoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which InventoryHistory to fetch.
     */
    where: InventoryHistoryWhereUniqueInput
  }

  /**
   * InventoryHistory findUniqueOrThrow
   */
  export type InventoryHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryHistory
     */
    select?: InventoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryHistory
     */
    omit?: InventoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which InventoryHistory to fetch.
     */
    where: InventoryHistoryWhereUniqueInput
  }

  /**
   * InventoryHistory findFirst
   */
  export type InventoryHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryHistory
     */
    select?: InventoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryHistory
     */
    omit?: InventoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which InventoryHistory to fetch.
     */
    where?: InventoryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryHistories to fetch.
     */
    orderBy?: InventoryHistoryOrderByWithRelationInput | InventoryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryHistories.
     */
    cursor?: InventoryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryHistories.
     */
    distinct?: InventoryHistoryScalarFieldEnum | InventoryHistoryScalarFieldEnum[]
  }

  /**
   * InventoryHistory findFirstOrThrow
   */
  export type InventoryHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryHistory
     */
    select?: InventoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryHistory
     */
    omit?: InventoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which InventoryHistory to fetch.
     */
    where?: InventoryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryHistories to fetch.
     */
    orderBy?: InventoryHistoryOrderByWithRelationInput | InventoryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryHistories.
     */
    cursor?: InventoryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryHistories.
     */
    distinct?: InventoryHistoryScalarFieldEnum | InventoryHistoryScalarFieldEnum[]
  }

  /**
   * InventoryHistory findMany
   */
  export type InventoryHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryHistory
     */
    select?: InventoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryHistory
     */
    omit?: InventoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which InventoryHistories to fetch.
     */
    where?: InventoryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryHistories to fetch.
     */
    orderBy?: InventoryHistoryOrderByWithRelationInput | InventoryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryHistories.
     */
    cursor?: InventoryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryHistories.
     */
    distinct?: InventoryHistoryScalarFieldEnum | InventoryHistoryScalarFieldEnum[]
  }

  /**
   * InventoryHistory create
   */
  export type InventoryHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryHistory
     */
    select?: InventoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryHistory
     */
    omit?: InventoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryHistory.
     */
    data: XOR<InventoryHistoryCreateInput, InventoryHistoryUncheckedCreateInput>
  }

  /**
   * InventoryHistory createMany
   */
  export type InventoryHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryHistories.
     */
    data: InventoryHistoryCreateManyInput | InventoryHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryHistory createManyAndReturn
   */
  export type InventoryHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryHistory
     */
    select?: InventoryHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryHistory
     */
    omit?: InventoryHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many InventoryHistories.
     */
    data: InventoryHistoryCreateManyInput | InventoryHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryHistory update
   */
  export type InventoryHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryHistory
     */
    select?: InventoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryHistory
     */
    omit?: InventoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryHistory.
     */
    data: XOR<InventoryHistoryUpdateInput, InventoryHistoryUncheckedUpdateInput>
    /**
     * Choose, which InventoryHistory to update.
     */
    where: InventoryHistoryWhereUniqueInput
  }

  /**
   * InventoryHistory updateMany
   */
  export type InventoryHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryHistories.
     */
    data: XOR<InventoryHistoryUpdateManyMutationInput, InventoryHistoryUncheckedUpdateManyInput>
    /**
     * Filter which InventoryHistories to update
     */
    where?: InventoryHistoryWhereInput
    /**
     * Limit how many InventoryHistories to update.
     */
    limit?: number
  }

  /**
   * InventoryHistory updateManyAndReturn
   */
  export type InventoryHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryHistory
     */
    select?: InventoryHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryHistory
     */
    omit?: InventoryHistoryOmit<ExtArgs> | null
    /**
     * The data used to update InventoryHistories.
     */
    data: XOR<InventoryHistoryUpdateManyMutationInput, InventoryHistoryUncheckedUpdateManyInput>
    /**
     * Filter which InventoryHistories to update
     */
    where?: InventoryHistoryWhereInput
    /**
     * Limit how many InventoryHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryHistory upsert
   */
  export type InventoryHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryHistory
     */
    select?: InventoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryHistory
     */
    omit?: InventoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryHistory to update in case it exists.
     */
    where: InventoryHistoryWhereUniqueInput
    /**
     * In case the InventoryHistory found by the `where` argument doesn't exist, create a new InventoryHistory with this data.
     */
    create: XOR<InventoryHistoryCreateInput, InventoryHistoryUncheckedCreateInput>
    /**
     * In case the InventoryHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryHistoryUpdateInput, InventoryHistoryUncheckedUpdateInput>
  }

  /**
   * InventoryHistory delete
   */
  export type InventoryHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryHistory
     */
    select?: InventoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryHistory
     */
    omit?: InventoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryHistoryInclude<ExtArgs> | null
    /**
     * Filter which InventoryHistory to delete.
     */
    where: InventoryHistoryWhereUniqueInput
  }

  /**
   * InventoryHistory deleteMany
   */
  export type InventoryHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryHistories to delete
     */
    where?: InventoryHistoryWhereInput
    /**
     * Limit how many InventoryHistories to delete.
     */
    limit?: number
  }

  /**
   * InventoryHistory.user
   */
  export type InventoryHistory$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * InventoryHistory without action
   */
  export type InventoryHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryHistory
     */
    select?: InventoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryHistory
     */
    omit?: InventoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryHistoryInclude<ExtArgs> | null
  }


  /**
   * Model DonationAppointment
   */

  export type AggregateDonationAppointment = {
    _count: DonationAppointmentCountAggregateOutputType | null
    _avg: DonationAppointmentAvgAggregateOutputType | null
    _sum: DonationAppointmentSumAggregateOutputType | null
    _min: DonationAppointmentMinAggregateOutputType | null
    _max: DonationAppointmentMaxAggregateOutputType | null
  }

  export type DonationAppointmentAvgAggregateOutputType = {
    id: number | null
    donorId: number | null
    hospitalId: number | null
  }

  export type DonationAppointmentSumAggregateOutputType = {
    id: number | null
    donorId: number | null
    hospitalId: number | null
  }

  export type DonationAppointmentMinAggregateOutputType = {
    id: number | null
    donorId: number | null
    hospitalId: number | null
    donationType: string | null
    status: string | null
    scheduledDate: Date | null
    createdAt: Date | null
  }

  export type DonationAppointmentMaxAggregateOutputType = {
    id: number | null
    donorId: number | null
    hospitalId: number | null
    donationType: string | null
    status: string | null
    scheduledDate: Date | null
    createdAt: Date | null
  }

  export type DonationAppointmentCountAggregateOutputType = {
    id: number
    donorId: number
    hospitalId: number
    donationType: number
    status: number
    scheduledDate: number
    createdAt: number
    _all: number
  }


  export type DonationAppointmentAvgAggregateInputType = {
    id?: true
    donorId?: true
    hospitalId?: true
  }

  export type DonationAppointmentSumAggregateInputType = {
    id?: true
    donorId?: true
    hospitalId?: true
  }

  export type DonationAppointmentMinAggregateInputType = {
    id?: true
    donorId?: true
    hospitalId?: true
    donationType?: true
    status?: true
    scheduledDate?: true
    createdAt?: true
  }

  export type DonationAppointmentMaxAggregateInputType = {
    id?: true
    donorId?: true
    hospitalId?: true
    donationType?: true
    status?: true
    scheduledDate?: true
    createdAt?: true
  }

  export type DonationAppointmentCountAggregateInputType = {
    id?: true
    donorId?: true
    hospitalId?: true
    donationType?: true
    status?: true
    scheduledDate?: true
    createdAt?: true
    _all?: true
  }

  export type DonationAppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonationAppointment to aggregate.
     */
    where?: DonationAppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationAppointments to fetch.
     */
    orderBy?: DonationAppointmentOrderByWithRelationInput | DonationAppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationAppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationAppointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationAppointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DonationAppointments
    **/
    _count?: true | DonationAppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationAppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationAppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationAppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationAppointmentMaxAggregateInputType
  }

  export type GetDonationAppointmentAggregateType<T extends DonationAppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDonationAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonationAppointment[P]>
      : GetScalarType<T[P], AggregateDonationAppointment[P]>
  }




  export type DonationAppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationAppointmentWhereInput
    orderBy?: DonationAppointmentOrderByWithAggregationInput | DonationAppointmentOrderByWithAggregationInput[]
    by: DonationAppointmentScalarFieldEnum[] | DonationAppointmentScalarFieldEnum
    having?: DonationAppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationAppointmentCountAggregateInputType | true
    _avg?: DonationAppointmentAvgAggregateInputType
    _sum?: DonationAppointmentSumAggregateInputType
    _min?: DonationAppointmentMinAggregateInputType
    _max?: DonationAppointmentMaxAggregateInputType
  }

  export type DonationAppointmentGroupByOutputType = {
    id: number
    donorId: number
    hospitalId: number | null
    donationType: string
    status: string
    scheduledDate: Date | null
    createdAt: Date
    _count: DonationAppointmentCountAggregateOutputType | null
    _avg: DonationAppointmentAvgAggregateOutputType | null
    _sum: DonationAppointmentSumAggregateOutputType | null
    _min: DonationAppointmentMinAggregateOutputType | null
    _max: DonationAppointmentMaxAggregateOutputType | null
  }

  type GetDonationAppointmentGroupByPayload<T extends DonationAppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationAppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationAppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationAppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], DonationAppointmentGroupByOutputType[P]>
        }
      >
    >


  export type DonationAppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorId?: boolean
    hospitalId?: boolean
    donationType?: boolean
    status?: boolean
    scheduledDate?: boolean
    createdAt?: boolean
    donor?: boolean | UserDefaultArgs<ExtArgs>
    hospital?: boolean | DonationAppointment$hospitalArgs<ExtArgs>
  }, ExtArgs["result"]["donationAppointment"]>

  export type DonationAppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorId?: boolean
    hospitalId?: boolean
    donationType?: boolean
    status?: boolean
    scheduledDate?: boolean
    createdAt?: boolean
    donor?: boolean | UserDefaultArgs<ExtArgs>
    hospital?: boolean | DonationAppointment$hospitalArgs<ExtArgs>
  }, ExtArgs["result"]["donationAppointment"]>

  export type DonationAppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorId?: boolean
    hospitalId?: boolean
    donationType?: boolean
    status?: boolean
    scheduledDate?: boolean
    createdAt?: boolean
    donor?: boolean | UserDefaultArgs<ExtArgs>
    hospital?: boolean | DonationAppointment$hospitalArgs<ExtArgs>
  }, ExtArgs["result"]["donationAppointment"]>

  export type DonationAppointmentSelectScalar = {
    id?: boolean
    donorId?: boolean
    hospitalId?: boolean
    donationType?: boolean
    status?: boolean
    scheduledDate?: boolean
    createdAt?: boolean
  }

  export type DonationAppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "donorId" | "hospitalId" | "donationType" | "status" | "scheduledDate" | "createdAt", ExtArgs["result"]["donationAppointment"]>
  export type DonationAppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | UserDefaultArgs<ExtArgs>
    hospital?: boolean | DonationAppointment$hospitalArgs<ExtArgs>
  }
  export type DonationAppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | UserDefaultArgs<ExtArgs>
    hospital?: boolean | DonationAppointment$hospitalArgs<ExtArgs>
  }
  export type DonationAppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | UserDefaultArgs<ExtArgs>
    hospital?: boolean | DonationAppointment$hospitalArgs<ExtArgs>
  }

  export type $DonationAppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DonationAppointment"
    objects: {
      donor: Prisma.$UserPayload<ExtArgs>
      hospital: Prisma.$HospitalPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      donorId: number
      hospitalId: number | null
      donationType: string
      status: string
      scheduledDate: Date | null
      createdAt: Date
    }, ExtArgs["result"]["donationAppointment"]>
    composites: {}
  }

  type DonationAppointmentGetPayload<S extends boolean | null | undefined | DonationAppointmentDefaultArgs> = $Result.GetResult<Prisma.$DonationAppointmentPayload, S>

  type DonationAppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationAppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationAppointmentCountAggregateInputType | true
    }

  export interface DonationAppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DonationAppointment'], meta: { name: 'DonationAppointment' } }
    /**
     * Find zero or one DonationAppointment that matches the filter.
     * @param {DonationAppointmentFindUniqueArgs} args - Arguments to find a DonationAppointment
     * @example
     * // Get one DonationAppointment
     * const donationAppointment = await prisma.donationAppointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationAppointmentFindUniqueArgs>(args: SelectSubset<T, DonationAppointmentFindUniqueArgs<ExtArgs>>): Prisma__DonationAppointmentClient<$Result.GetResult<Prisma.$DonationAppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DonationAppointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationAppointmentFindUniqueOrThrowArgs} args - Arguments to find a DonationAppointment
     * @example
     * // Get one DonationAppointment
     * const donationAppointment = await prisma.donationAppointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationAppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationAppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationAppointmentClient<$Result.GetResult<Prisma.$DonationAppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonationAppointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAppointmentFindFirstArgs} args - Arguments to find a DonationAppointment
     * @example
     * // Get one DonationAppointment
     * const donationAppointment = await prisma.donationAppointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationAppointmentFindFirstArgs>(args?: SelectSubset<T, DonationAppointmentFindFirstArgs<ExtArgs>>): Prisma__DonationAppointmentClient<$Result.GetResult<Prisma.$DonationAppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonationAppointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAppointmentFindFirstOrThrowArgs} args - Arguments to find a DonationAppointment
     * @example
     * // Get one DonationAppointment
     * const donationAppointment = await prisma.donationAppointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationAppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationAppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationAppointmentClient<$Result.GetResult<Prisma.$DonationAppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DonationAppointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DonationAppointments
     * const donationAppointments = await prisma.donationAppointment.findMany()
     * 
     * // Get first 10 DonationAppointments
     * const donationAppointments = await prisma.donationAppointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationAppointmentWithIdOnly = await prisma.donationAppointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationAppointmentFindManyArgs>(args?: SelectSubset<T, DonationAppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationAppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DonationAppointment.
     * @param {DonationAppointmentCreateArgs} args - Arguments to create a DonationAppointment.
     * @example
     * // Create one DonationAppointment
     * const DonationAppointment = await prisma.donationAppointment.create({
     *   data: {
     *     // ... data to create a DonationAppointment
     *   }
     * })
     * 
     */
    create<T extends DonationAppointmentCreateArgs>(args: SelectSubset<T, DonationAppointmentCreateArgs<ExtArgs>>): Prisma__DonationAppointmentClient<$Result.GetResult<Prisma.$DonationAppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DonationAppointments.
     * @param {DonationAppointmentCreateManyArgs} args - Arguments to create many DonationAppointments.
     * @example
     * // Create many DonationAppointments
     * const donationAppointment = await prisma.donationAppointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationAppointmentCreateManyArgs>(args?: SelectSubset<T, DonationAppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DonationAppointments and returns the data saved in the database.
     * @param {DonationAppointmentCreateManyAndReturnArgs} args - Arguments to create many DonationAppointments.
     * @example
     * // Create many DonationAppointments
     * const donationAppointment = await prisma.donationAppointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DonationAppointments and only return the `id`
     * const donationAppointmentWithIdOnly = await prisma.donationAppointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonationAppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DonationAppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationAppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DonationAppointment.
     * @param {DonationAppointmentDeleteArgs} args - Arguments to delete one DonationAppointment.
     * @example
     * // Delete one DonationAppointment
     * const DonationAppointment = await prisma.donationAppointment.delete({
     *   where: {
     *     // ... filter to delete one DonationAppointment
     *   }
     * })
     * 
     */
    delete<T extends DonationAppointmentDeleteArgs>(args: SelectSubset<T, DonationAppointmentDeleteArgs<ExtArgs>>): Prisma__DonationAppointmentClient<$Result.GetResult<Prisma.$DonationAppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DonationAppointment.
     * @param {DonationAppointmentUpdateArgs} args - Arguments to update one DonationAppointment.
     * @example
     * // Update one DonationAppointment
     * const donationAppointment = await prisma.donationAppointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationAppointmentUpdateArgs>(args: SelectSubset<T, DonationAppointmentUpdateArgs<ExtArgs>>): Prisma__DonationAppointmentClient<$Result.GetResult<Prisma.$DonationAppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DonationAppointments.
     * @param {DonationAppointmentDeleteManyArgs} args - Arguments to filter DonationAppointments to delete.
     * @example
     * // Delete a few DonationAppointments
     * const { count } = await prisma.donationAppointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationAppointmentDeleteManyArgs>(args?: SelectSubset<T, DonationAppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonationAppointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DonationAppointments
     * const donationAppointment = await prisma.donationAppointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationAppointmentUpdateManyArgs>(args: SelectSubset<T, DonationAppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonationAppointments and returns the data updated in the database.
     * @param {DonationAppointmentUpdateManyAndReturnArgs} args - Arguments to update many DonationAppointments.
     * @example
     * // Update many DonationAppointments
     * const donationAppointment = await prisma.donationAppointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DonationAppointments and only return the `id`
     * const donationAppointmentWithIdOnly = await prisma.donationAppointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonationAppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DonationAppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationAppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DonationAppointment.
     * @param {DonationAppointmentUpsertArgs} args - Arguments to update or create a DonationAppointment.
     * @example
     * // Update or create a DonationAppointment
     * const donationAppointment = await prisma.donationAppointment.upsert({
     *   create: {
     *     // ... data to create a DonationAppointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DonationAppointment we want to update
     *   }
     * })
     */
    upsert<T extends DonationAppointmentUpsertArgs>(args: SelectSubset<T, DonationAppointmentUpsertArgs<ExtArgs>>): Prisma__DonationAppointmentClient<$Result.GetResult<Prisma.$DonationAppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DonationAppointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAppointmentCountArgs} args - Arguments to filter DonationAppointments to count.
     * @example
     * // Count the number of DonationAppointments
     * const count = await prisma.donationAppointment.count({
     *   where: {
     *     // ... the filter for the DonationAppointments we want to count
     *   }
     * })
    **/
    count<T extends DonationAppointmentCountArgs>(
      args?: Subset<T, DonationAppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationAppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DonationAppointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonationAppointmentAggregateArgs>(args: Subset<T, DonationAppointmentAggregateArgs>): Prisma.PrismaPromise<GetDonationAppointmentAggregateType<T>>

    /**
     * Group by DonationAppointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonationAppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationAppointmentGroupByArgs['orderBy'] }
        : { orderBy?: DonationAppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonationAppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DonationAppointment model
   */
  readonly fields: DonationAppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DonationAppointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationAppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hospital<T extends DonationAppointment$hospitalArgs<ExtArgs> = {}>(args?: Subset<T, DonationAppointment$hospitalArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DonationAppointment model
   */
  interface DonationAppointmentFieldRefs {
    readonly id: FieldRef<"DonationAppointment", 'Int'>
    readonly donorId: FieldRef<"DonationAppointment", 'Int'>
    readonly hospitalId: FieldRef<"DonationAppointment", 'Int'>
    readonly donationType: FieldRef<"DonationAppointment", 'String'>
    readonly status: FieldRef<"DonationAppointment", 'String'>
    readonly scheduledDate: FieldRef<"DonationAppointment", 'DateTime'>
    readonly createdAt: FieldRef<"DonationAppointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DonationAppointment findUnique
   */
  export type DonationAppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationAppointment
     */
    select?: DonationAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationAppointment
     */
    omit?: DonationAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationAppointmentInclude<ExtArgs> | null
    /**
     * Filter, which DonationAppointment to fetch.
     */
    where: DonationAppointmentWhereUniqueInput
  }

  /**
   * DonationAppointment findUniqueOrThrow
   */
  export type DonationAppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationAppointment
     */
    select?: DonationAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationAppointment
     */
    omit?: DonationAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationAppointmentInclude<ExtArgs> | null
    /**
     * Filter, which DonationAppointment to fetch.
     */
    where: DonationAppointmentWhereUniqueInput
  }

  /**
   * DonationAppointment findFirst
   */
  export type DonationAppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationAppointment
     */
    select?: DonationAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationAppointment
     */
    omit?: DonationAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationAppointmentInclude<ExtArgs> | null
    /**
     * Filter, which DonationAppointment to fetch.
     */
    where?: DonationAppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationAppointments to fetch.
     */
    orderBy?: DonationAppointmentOrderByWithRelationInput | DonationAppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonationAppointments.
     */
    cursor?: DonationAppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationAppointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationAppointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonationAppointments.
     */
    distinct?: DonationAppointmentScalarFieldEnum | DonationAppointmentScalarFieldEnum[]
  }

  /**
   * DonationAppointment findFirstOrThrow
   */
  export type DonationAppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationAppointment
     */
    select?: DonationAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationAppointment
     */
    omit?: DonationAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationAppointmentInclude<ExtArgs> | null
    /**
     * Filter, which DonationAppointment to fetch.
     */
    where?: DonationAppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationAppointments to fetch.
     */
    orderBy?: DonationAppointmentOrderByWithRelationInput | DonationAppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonationAppointments.
     */
    cursor?: DonationAppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationAppointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationAppointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonationAppointments.
     */
    distinct?: DonationAppointmentScalarFieldEnum | DonationAppointmentScalarFieldEnum[]
  }

  /**
   * DonationAppointment findMany
   */
  export type DonationAppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationAppointment
     */
    select?: DonationAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationAppointment
     */
    omit?: DonationAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationAppointmentInclude<ExtArgs> | null
    /**
     * Filter, which DonationAppointments to fetch.
     */
    where?: DonationAppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationAppointments to fetch.
     */
    orderBy?: DonationAppointmentOrderByWithRelationInput | DonationAppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DonationAppointments.
     */
    cursor?: DonationAppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationAppointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationAppointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonationAppointments.
     */
    distinct?: DonationAppointmentScalarFieldEnum | DonationAppointmentScalarFieldEnum[]
  }

  /**
   * DonationAppointment create
   */
  export type DonationAppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationAppointment
     */
    select?: DonationAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationAppointment
     */
    omit?: DonationAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationAppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a DonationAppointment.
     */
    data: XOR<DonationAppointmentCreateInput, DonationAppointmentUncheckedCreateInput>
  }

  /**
   * DonationAppointment createMany
   */
  export type DonationAppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DonationAppointments.
     */
    data: DonationAppointmentCreateManyInput | DonationAppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DonationAppointment createManyAndReturn
   */
  export type DonationAppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationAppointment
     */
    select?: DonationAppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonationAppointment
     */
    omit?: DonationAppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many DonationAppointments.
     */
    data: DonationAppointmentCreateManyInput | DonationAppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationAppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonationAppointment update
   */
  export type DonationAppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationAppointment
     */
    select?: DonationAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationAppointment
     */
    omit?: DonationAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationAppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a DonationAppointment.
     */
    data: XOR<DonationAppointmentUpdateInput, DonationAppointmentUncheckedUpdateInput>
    /**
     * Choose, which DonationAppointment to update.
     */
    where: DonationAppointmentWhereUniqueInput
  }

  /**
   * DonationAppointment updateMany
   */
  export type DonationAppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DonationAppointments.
     */
    data: XOR<DonationAppointmentUpdateManyMutationInput, DonationAppointmentUncheckedUpdateManyInput>
    /**
     * Filter which DonationAppointments to update
     */
    where?: DonationAppointmentWhereInput
    /**
     * Limit how many DonationAppointments to update.
     */
    limit?: number
  }

  /**
   * DonationAppointment updateManyAndReturn
   */
  export type DonationAppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationAppointment
     */
    select?: DonationAppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonationAppointment
     */
    omit?: DonationAppointmentOmit<ExtArgs> | null
    /**
     * The data used to update DonationAppointments.
     */
    data: XOR<DonationAppointmentUpdateManyMutationInput, DonationAppointmentUncheckedUpdateManyInput>
    /**
     * Filter which DonationAppointments to update
     */
    where?: DonationAppointmentWhereInput
    /**
     * Limit how many DonationAppointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationAppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonationAppointment upsert
   */
  export type DonationAppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationAppointment
     */
    select?: DonationAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationAppointment
     */
    omit?: DonationAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationAppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the DonationAppointment to update in case it exists.
     */
    where: DonationAppointmentWhereUniqueInput
    /**
     * In case the DonationAppointment found by the `where` argument doesn't exist, create a new DonationAppointment with this data.
     */
    create: XOR<DonationAppointmentCreateInput, DonationAppointmentUncheckedCreateInput>
    /**
     * In case the DonationAppointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationAppointmentUpdateInput, DonationAppointmentUncheckedUpdateInput>
  }

  /**
   * DonationAppointment delete
   */
  export type DonationAppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationAppointment
     */
    select?: DonationAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationAppointment
     */
    omit?: DonationAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationAppointmentInclude<ExtArgs> | null
    /**
     * Filter which DonationAppointment to delete.
     */
    where: DonationAppointmentWhereUniqueInput
  }

  /**
   * DonationAppointment deleteMany
   */
  export type DonationAppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonationAppointments to delete
     */
    where?: DonationAppointmentWhereInput
    /**
     * Limit how many DonationAppointments to delete.
     */
    limit?: number
  }

  /**
   * DonationAppointment.hospital
   */
  export type DonationAppointment$hospitalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    where?: HospitalWhereInput
  }

  /**
   * DonationAppointment without action
   */
  export type DonationAppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationAppointment
     */
    select?: DonationAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationAppointment
     */
    omit?: DonationAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationAppointmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OtpVerificationScalarFieldEnum: {
    id: 'id',
    email: 'email',
    otp: 'otp',
    expiresAt: 'expiresAt'
  };

  export type OtpVerificationScalarFieldEnum = (typeof OtpVerificationScalarFieldEnum)[keyof typeof OtpVerificationScalarFieldEnum]


  export const HospitalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    city: 'city',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type HospitalScalarFieldEnum = (typeof HospitalScalarFieldEnum)[keyof typeof HospitalScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role',
    hospitalId: 'hospitalId',
    bloodGroup: 'bloodGroup',
    aadharNumber: 'aadharNumber',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BloodInventoryScalarFieldEnum: {
    id: 'id',
    bankId: 'bankId',
    bloodGroup: 'bloodGroup',
    component: 'component',
    units: 'units',
    expiresOn: 'expiresOn',
    createdAt: 'createdAt'
  };

  export type BloodInventoryScalarFieldEnum = (typeof BloodInventoryScalarFieldEnum)[keyof typeof BloodInventoryScalarFieldEnum]


  export const BloodRequestScalarFieldEnum: {
    id: 'id',
    requesterId: 'requesterId',
    hospitalId: 'hospitalId',
    bloodGroup: 'bloodGroup',
    units: 'units',
    urgency: 'urgency',
    status: 'status',
    token: 'token',
    createdAt: 'createdAt'
  };

  export type BloodRequestScalarFieldEnum = (typeof BloodRequestScalarFieldEnum)[keyof typeof BloodRequestScalarFieldEnum]


  export const InventoryHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    bloodGroup: 'bloodGroup',
    component: 'component',
    units: 'units',
    bankId: 'bankId',
    createdAt: 'createdAt'
  };

  export type InventoryHistoryScalarFieldEnum = (typeof InventoryHistoryScalarFieldEnum)[keyof typeof InventoryHistoryScalarFieldEnum]


  export const DonationAppointmentScalarFieldEnum: {
    id: 'id',
    donorId: 'donorId',
    hospitalId: 'hospitalId',
    donationType: 'donationType',
    status: 'status',
    scheduledDate: 'scheduledDate',
    createdAt: 'createdAt'
  };

  export type DonationAppointmentScalarFieldEnum = (typeof DonationAppointmentScalarFieldEnum)[keyof typeof DonationAppointmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type OtpVerificationWhereInput = {
    AND?: OtpVerificationWhereInput | OtpVerificationWhereInput[]
    OR?: OtpVerificationWhereInput[]
    NOT?: OtpVerificationWhereInput | OtpVerificationWhereInput[]
    id?: IntFilter<"OtpVerification"> | number
    email?: StringFilter<"OtpVerification"> | string
    otp?: StringFilter<"OtpVerification"> | string
    expiresAt?: DateTimeFilter<"OtpVerification"> | Date | string
  }

  export type OtpVerificationOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
  }

  export type OtpVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: OtpVerificationWhereInput | OtpVerificationWhereInput[]
    OR?: OtpVerificationWhereInput[]
    NOT?: OtpVerificationWhereInput | OtpVerificationWhereInput[]
    otp?: StringFilter<"OtpVerification"> | string
    expiresAt?: DateTimeFilter<"OtpVerification"> | Date | string
  }, "id" | "email">

  export type OtpVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    _count?: OtpVerificationCountOrderByAggregateInput
    _avg?: OtpVerificationAvgOrderByAggregateInput
    _max?: OtpVerificationMaxOrderByAggregateInput
    _min?: OtpVerificationMinOrderByAggregateInput
    _sum?: OtpVerificationSumOrderByAggregateInput
  }

  export type OtpVerificationScalarWhereWithAggregatesInput = {
    AND?: OtpVerificationScalarWhereWithAggregatesInput | OtpVerificationScalarWhereWithAggregatesInput[]
    OR?: OtpVerificationScalarWhereWithAggregatesInput[]
    NOT?: OtpVerificationScalarWhereWithAggregatesInput | OtpVerificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OtpVerification"> | number
    email?: StringWithAggregatesFilter<"OtpVerification"> | string
    otp?: StringWithAggregatesFilter<"OtpVerification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"OtpVerification"> | Date | string
  }

  export type HospitalWhereInput = {
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    id?: IntFilter<"Hospital"> | number
    name?: StringFilter<"Hospital"> | string
    city?: StringFilter<"Hospital"> | string
    latitude?: FloatNullableFilter<"Hospital"> | number | null
    longitude?: FloatNullableFilter<"Hospital"> | number | null
    users?: UserListRelationFilter
    bloodInventory?: BloodInventoryListRelationFilter
    bloodRequests?: BloodRequestListRelationFilter
    inventoryHistory?: InventoryHistoryListRelationFilter
    donationAppointments?: DonationAppointmentListRelationFilter
  }

  export type HospitalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
    bloodInventory?: BloodInventoryOrderByRelationAggregateInput
    bloodRequests?: BloodRequestOrderByRelationAggregateInput
    inventoryHistory?: InventoryHistoryOrderByRelationAggregateInput
    donationAppointments?: DonationAppointmentOrderByRelationAggregateInput
  }

  export type HospitalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    name?: StringFilter<"Hospital"> | string
    city?: StringFilter<"Hospital"> | string
    latitude?: FloatNullableFilter<"Hospital"> | number | null
    longitude?: FloatNullableFilter<"Hospital"> | number | null
    users?: UserListRelationFilter
    bloodInventory?: BloodInventoryListRelationFilter
    bloodRequests?: BloodRequestListRelationFilter
    inventoryHistory?: InventoryHistoryListRelationFilter
    donationAppointments?: DonationAppointmentListRelationFilter
  }, "id">

  export type HospitalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    _count?: HospitalCountOrderByAggregateInput
    _avg?: HospitalAvgOrderByAggregateInput
    _max?: HospitalMaxOrderByAggregateInput
    _min?: HospitalMinOrderByAggregateInput
    _sum?: HospitalSumOrderByAggregateInput
  }

  export type HospitalScalarWhereWithAggregatesInput = {
    AND?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    OR?: HospitalScalarWhereWithAggregatesInput[]
    NOT?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hospital"> | number
    name?: StringWithAggregatesFilter<"Hospital"> | string
    city?: StringWithAggregatesFilter<"Hospital"> | string
    latitude?: FloatNullableWithAggregatesFilter<"Hospital"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Hospital"> | number | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    hospitalId?: IntNullableFilter<"User"> | number | null
    bloodGroup?: StringNullableFilter<"User"> | string | null
    aadharNumber?: StringNullableFilter<"User"> | string | null
    latitude?: FloatNullableFilter<"User"> | number | null
    longitude?: FloatNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    hospital?: XOR<HospitalNullableScalarRelationFilter, HospitalWhereInput> | null
    bloodRequests?: BloodRequestListRelationFilter
    inventoryHistory?: InventoryHistoryListRelationFilter
    donationAppointments?: DonationAppointmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    hospitalId?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    aadharNumber?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    hospital?: HospitalOrderByWithRelationInput
    bloodRequests?: BloodRequestOrderByRelationAggregateInput
    inventoryHistory?: InventoryHistoryOrderByRelationAggregateInput
    donationAppointments?: DonationAppointmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    hospitalId?: IntNullableFilter<"User"> | number | null
    bloodGroup?: StringNullableFilter<"User"> | string | null
    aadharNumber?: StringNullableFilter<"User"> | string | null
    latitude?: FloatNullableFilter<"User"> | number | null
    longitude?: FloatNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    hospital?: XOR<HospitalNullableScalarRelationFilter, HospitalWhereInput> | null
    bloodRequests?: BloodRequestListRelationFilter
    inventoryHistory?: InventoryHistoryListRelationFilter
    donationAppointments?: DonationAppointmentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    hospitalId?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    aadharNumber?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    hospitalId?: IntNullableWithAggregatesFilter<"User"> | number | null
    bloodGroup?: StringNullableWithAggregatesFilter<"User"> | string | null
    aadharNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"User"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BloodInventoryWhereInput = {
    AND?: BloodInventoryWhereInput | BloodInventoryWhereInput[]
    OR?: BloodInventoryWhereInput[]
    NOT?: BloodInventoryWhereInput | BloodInventoryWhereInput[]
    id?: IntFilter<"BloodInventory"> | number
    bankId?: IntFilter<"BloodInventory"> | number
    bloodGroup?: StringFilter<"BloodInventory"> | string
    component?: StringFilter<"BloodInventory"> | string
    units?: IntFilter<"BloodInventory"> | number
    expiresOn?: DateTimeFilter<"BloodInventory"> | Date | string
    createdAt?: DateTimeFilter<"BloodInventory"> | Date | string
    bank?: XOR<HospitalScalarRelationFilter, HospitalWhereInput>
  }

  export type BloodInventoryOrderByWithRelationInput = {
    id?: SortOrder
    bankId?: SortOrder
    bloodGroup?: SortOrder
    component?: SortOrder
    units?: SortOrder
    expiresOn?: SortOrder
    createdAt?: SortOrder
    bank?: HospitalOrderByWithRelationInput
  }

  export type BloodInventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BloodInventoryWhereInput | BloodInventoryWhereInput[]
    OR?: BloodInventoryWhereInput[]
    NOT?: BloodInventoryWhereInput | BloodInventoryWhereInput[]
    bankId?: IntFilter<"BloodInventory"> | number
    bloodGroup?: StringFilter<"BloodInventory"> | string
    component?: StringFilter<"BloodInventory"> | string
    units?: IntFilter<"BloodInventory"> | number
    expiresOn?: DateTimeFilter<"BloodInventory"> | Date | string
    createdAt?: DateTimeFilter<"BloodInventory"> | Date | string
    bank?: XOR<HospitalScalarRelationFilter, HospitalWhereInput>
  }, "id">

  export type BloodInventoryOrderByWithAggregationInput = {
    id?: SortOrder
    bankId?: SortOrder
    bloodGroup?: SortOrder
    component?: SortOrder
    units?: SortOrder
    expiresOn?: SortOrder
    createdAt?: SortOrder
    _count?: BloodInventoryCountOrderByAggregateInput
    _avg?: BloodInventoryAvgOrderByAggregateInput
    _max?: BloodInventoryMaxOrderByAggregateInput
    _min?: BloodInventoryMinOrderByAggregateInput
    _sum?: BloodInventorySumOrderByAggregateInput
  }

  export type BloodInventoryScalarWhereWithAggregatesInput = {
    AND?: BloodInventoryScalarWhereWithAggregatesInput | BloodInventoryScalarWhereWithAggregatesInput[]
    OR?: BloodInventoryScalarWhereWithAggregatesInput[]
    NOT?: BloodInventoryScalarWhereWithAggregatesInput | BloodInventoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BloodInventory"> | number
    bankId?: IntWithAggregatesFilter<"BloodInventory"> | number
    bloodGroup?: StringWithAggregatesFilter<"BloodInventory"> | string
    component?: StringWithAggregatesFilter<"BloodInventory"> | string
    units?: IntWithAggregatesFilter<"BloodInventory"> | number
    expiresOn?: DateTimeWithAggregatesFilter<"BloodInventory"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"BloodInventory"> | Date | string
  }

  export type BloodRequestWhereInput = {
    AND?: BloodRequestWhereInput | BloodRequestWhereInput[]
    OR?: BloodRequestWhereInput[]
    NOT?: BloodRequestWhereInput | BloodRequestWhereInput[]
    id?: IntFilter<"BloodRequest"> | number
    requesterId?: IntNullableFilter<"BloodRequest"> | number | null
    hospitalId?: IntFilter<"BloodRequest"> | number
    bloodGroup?: StringFilter<"BloodRequest"> | string
    units?: IntFilter<"BloodRequest"> | number
    urgency?: StringFilter<"BloodRequest"> | string
    status?: StringFilter<"BloodRequest"> | string
    token?: StringNullableFilter<"BloodRequest"> | string | null
    createdAt?: DateTimeFilter<"BloodRequest"> | Date | string
    requester?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    hospital?: XOR<HospitalScalarRelationFilter, HospitalWhereInput>
  }

  export type BloodRequestOrderByWithRelationInput = {
    id?: SortOrder
    requesterId?: SortOrderInput | SortOrder
    hospitalId?: SortOrder
    bloodGroup?: SortOrder
    units?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    token?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    requester?: UserOrderByWithRelationInput
    hospital?: HospitalOrderByWithRelationInput
  }

  export type BloodRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BloodRequestWhereInput | BloodRequestWhereInput[]
    OR?: BloodRequestWhereInput[]
    NOT?: BloodRequestWhereInput | BloodRequestWhereInput[]
    requesterId?: IntNullableFilter<"BloodRequest"> | number | null
    hospitalId?: IntFilter<"BloodRequest"> | number
    bloodGroup?: StringFilter<"BloodRequest"> | string
    units?: IntFilter<"BloodRequest"> | number
    urgency?: StringFilter<"BloodRequest"> | string
    status?: StringFilter<"BloodRequest"> | string
    token?: StringNullableFilter<"BloodRequest"> | string | null
    createdAt?: DateTimeFilter<"BloodRequest"> | Date | string
    requester?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    hospital?: XOR<HospitalScalarRelationFilter, HospitalWhereInput>
  }, "id">

  export type BloodRequestOrderByWithAggregationInput = {
    id?: SortOrder
    requesterId?: SortOrderInput | SortOrder
    hospitalId?: SortOrder
    bloodGroup?: SortOrder
    units?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    token?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BloodRequestCountOrderByAggregateInput
    _avg?: BloodRequestAvgOrderByAggregateInput
    _max?: BloodRequestMaxOrderByAggregateInput
    _min?: BloodRequestMinOrderByAggregateInput
    _sum?: BloodRequestSumOrderByAggregateInput
  }

  export type BloodRequestScalarWhereWithAggregatesInput = {
    AND?: BloodRequestScalarWhereWithAggregatesInput | BloodRequestScalarWhereWithAggregatesInput[]
    OR?: BloodRequestScalarWhereWithAggregatesInput[]
    NOT?: BloodRequestScalarWhereWithAggregatesInput | BloodRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BloodRequest"> | number
    requesterId?: IntNullableWithAggregatesFilter<"BloodRequest"> | number | null
    hospitalId?: IntWithAggregatesFilter<"BloodRequest"> | number
    bloodGroup?: StringWithAggregatesFilter<"BloodRequest"> | string
    units?: IntWithAggregatesFilter<"BloodRequest"> | number
    urgency?: StringWithAggregatesFilter<"BloodRequest"> | string
    status?: StringWithAggregatesFilter<"BloodRequest"> | string
    token?: StringNullableWithAggregatesFilter<"BloodRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BloodRequest"> | Date | string
  }

  export type InventoryHistoryWhereInput = {
    AND?: InventoryHistoryWhereInput | InventoryHistoryWhereInput[]
    OR?: InventoryHistoryWhereInput[]
    NOT?: InventoryHistoryWhereInput | InventoryHistoryWhereInput[]
    id?: IntFilter<"InventoryHistory"> | number
    userId?: IntNullableFilter<"InventoryHistory"> | number | null
    action?: StringFilter<"InventoryHistory"> | string
    bloodGroup?: StringFilter<"InventoryHistory"> | string
    component?: StringFilter<"InventoryHistory"> | string
    units?: IntFilter<"InventoryHistory"> | number
    bankId?: IntFilter<"InventoryHistory"> | number
    createdAt?: DateTimeFilter<"InventoryHistory"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    bank?: XOR<HospitalScalarRelationFilter, HospitalWhereInput>
  }

  export type InventoryHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    bloodGroup?: SortOrder
    component?: SortOrder
    units?: SortOrder
    bankId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    bank?: HospitalOrderByWithRelationInput
  }

  export type InventoryHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InventoryHistoryWhereInput | InventoryHistoryWhereInput[]
    OR?: InventoryHistoryWhereInput[]
    NOT?: InventoryHistoryWhereInput | InventoryHistoryWhereInput[]
    userId?: IntNullableFilter<"InventoryHistory"> | number | null
    action?: StringFilter<"InventoryHistory"> | string
    bloodGroup?: StringFilter<"InventoryHistory"> | string
    component?: StringFilter<"InventoryHistory"> | string
    units?: IntFilter<"InventoryHistory"> | number
    bankId?: IntFilter<"InventoryHistory"> | number
    createdAt?: DateTimeFilter<"InventoryHistory"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    bank?: XOR<HospitalScalarRelationFilter, HospitalWhereInput>
  }, "id">

  export type InventoryHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    bloodGroup?: SortOrder
    component?: SortOrder
    units?: SortOrder
    bankId?: SortOrder
    createdAt?: SortOrder
    _count?: InventoryHistoryCountOrderByAggregateInput
    _avg?: InventoryHistoryAvgOrderByAggregateInput
    _max?: InventoryHistoryMaxOrderByAggregateInput
    _min?: InventoryHistoryMinOrderByAggregateInput
    _sum?: InventoryHistorySumOrderByAggregateInput
  }

  export type InventoryHistoryScalarWhereWithAggregatesInput = {
    AND?: InventoryHistoryScalarWhereWithAggregatesInput | InventoryHistoryScalarWhereWithAggregatesInput[]
    OR?: InventoryHistoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryHistoryScalarWhereWithAggregatesInput | InventoryHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InventoryHistory"> | number
    userId?: IntNullableWithAggregatesFilter<"InventoryHistory"> | number | null
    action?: StringWithAggregatesFilter<"InventoryHistory"> | string
    bloodGroup?: StringWithAggregatesFilter<"InventoryHistory"> | string
    component?: StringWithAggregatesFilter<"InventoryHistory"> | string
    units?: IntWithAggregatesFilter<"InventoryHistory"> | number
    bankId?: IntWithAggregatesFilter<"InventoryHistory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"InventoryHistory"> | Date | string
  }

  export type DonationAppointmentWhereInput = {
    AND?: DonationAppointmentWhereInput | DonationAppointmentWhereInput[]
    OR?: DonationAppointmentWhereInput[]
    NOT?: DonationAppointmentWhereInput | DonationAppointmentWhereInput[]
    id?: IntFilter<"DonationAppointment"> | number
    donorId?: IntFilter<"DonationAppointment"> | number
    hospitalId?: IntNullableFilter<"DonationAppointment"> | number | null
    donationType?: StringFilter<"DonationAppointment"> | string
    status?: StringFilter<"DonationAppointment"> | string
    scheduledDate?: DateTimeNullableFilter<"DonationAppointment"> | Date | string | null
    createdAt?: DateTimeFilter<"DonationAppointment"> | Date | string
    donor?: XOR<UserScalarRelationFilter, UserWhereInput>
    hospital?: XOR<HospitalNullableScalarRelationFilter, HospitalWhereInput> | null
  }

  export type DonationAppointmentOrderByWithRelationInput = {
    id?: SortOrder
    donorId?: SortOrder
    hospitalId?: SortOrderInput | SortOrder
    donationType?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    donor?: UserOrderByWithRelationInput
    hospital?: HospitalOrderByWithRelationInput
  }

  export type DonationAppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DonationAppointmentWhereInput | DonationAppointmentWhereInput[]
    OR?: DonationAppointmentWhereInput[]
    NOT?: DonationAppointmentWhereInput | DonationAppointmentWhereInput[]
    donorId?: IntFilter<"DonationAppointment"> | number
    hospitalId?: IntNullableFilter<"DonationAppointment"> | number | null
    donationType?: StringFilter<"DonationAppointment"> | string
    status?: StringFilter<"DonationAppointment"> | string
    scheduledDate?: DateTimeNullableFilter<"DonationAppointment"> | Date | string | null
    createdAt?: DateTimeFilter<"DonationAppointment"> | Date | string
    donor?: XOR<UserScalarRelationFilter, UserWhereInput>
    hospital?: XOR<HospitalNullableScalarRelationFilter, HospitalWhereInput> | null
  }, "id">

  export type DonationAppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    donorId?: SortOrder
    hospitalId?: SortOrderInput | SortOrder
    donationType?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DonationAppointmentCountOrderByAggregateInput
    _avg?: DonationAppointmentAvgOrderByAggregateInput
    _max?: DonationAppointmentMaxOrderByAggregateInput
    _min?: DonationAppointmentMinOrderByAggregateInput
    _sum?: DonationAppointmentSumOrderByAggregateInput
  }

  export type DonationAppointmentScalarWhereWithAggregatesInput = {
    AND?: DonationAppointmentScalarWhereWithAggregatesInput | DonationAppointmentScalarWhereWithAggregatesInput[]
    OR?: DonationAppointmentScalarWhereWithAggregatesInput[]
    NOT?: DonationAppointmentScalarWhereWithAggregatesInput | DonationAppointmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DonationAppointment"> | number
    donorId?: IntWithAggregatesFilter<"DonationAppointment"> | number
    hospitalId?: IntNullableWithAggregatesFilter<"DonationAppointment"> | number | null
    donationType?: StringWithAggregatesFilter<"DonationAppointment"> | string
    status?: StringWithAggregatesFilter<"DonationAppointment"> | string
    scheduledDate?: DateTimeNullableWithAggregatesFilter<"DonationAppointment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DonationAppointment"> | Date | string
  }

  export type OtpVerificationCreateInput = {
    email: string
    otp: string
    expiresAt: Date | string
  }

  export type OtpVerificationUncheckedCreateInput = {
    id?: number
    email: string
    otp: string
    expiresAt: Date | string
  }

  export type OtpVerificationUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpVerificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpVerificationCreateManyInput = {
    id?: number
    email: string
    otp: string
    expiresAt: Date | string
  }

  export type OtpVerificationUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpVerificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalCreateInput = {
    name: string
    city: string
    latitude?: number | null
    longitude?: number | null
    users?: UserCreateNestedManyWithoutHospitalInput
    bloodInventory?: BloodInventoryCreateNestedManyWithoutBankInput
    bloodRequests?: BloodRequestCreateNestedManyWithoutHospitalInput
    inventoryHistory?: InventoryHistoryCreateNestedManyWithoutBankInput
    donationAppointments?: DonationAppointmentCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateInput = {
    id?: number
    name: string
    city: string
    latitude?: number | null
    longitude?: number | null
    users?: UserUncheckedCreateNestedManyWithoutHospitalInput
    bloodInventory?: BloodInventoryUncheckedCreateNestedManyWithoutBankInput
    bloodRequests?: BloodRequestUncheckedCreateNestedManyWithoutHospitalInput
    inventoryHistory?: InventoryHistoryUncheckedCreateNestedManyWithoutBankInput
    donationAppointments?: DonationAppointmentUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    users?: UserUpdateManyWithoutHospitalNestedInput
    bloodInventory?: BloodInventoryUpdateManyWithoutBankNestedInput
    bloodRequests?: BloodRequestUpdateManyWithoutHospitalNestedInput
    inventoryHistory?: InventoryHistoryUpdateManyWithoutBankNestedInput
    donationAppointments?: DonationAppointmentUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    users?: UserUncheckedUpdateManyWithoutHospitalNestedInput
    bloodInventory?: BloodInventoryUncheckedUpdateManyWithoutBankNestedInput
    bloodRequests?: BloodRequestUncheckedUpdateManyWithoutHospitalNestedInput
    inventoryHistory?: InventoryHistoryUncheckedUpdateManyWithoutBankNestedInput
    donationAppointments?: DonationAppointmentUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalCreateManyInput = {
    id?: number
    name: string
    city: string
    latitude?: number | null
    longitude?: number | null
  }

  export type HospitalUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type HospitalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type UserCreateInput = {
    email: string
    passwordHash: string
    name: string
    role?: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    hospital?: HospitalCreateNestedOneWithoutUsersInput
    bloodRequests?: BloodRequestCreateNestedManyWithoutRequesterInput
    inventoryHistory?: InventoryHistoryCreateNestedManyWithoutUserInput
    donationAppointments?: DonationAppointmentCreateNestedManyWithoutDonorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    passwordHash: string
    name: string
    role?: string
    hospitalId?: number | null
    bloodGroup?: string | null
    aadharNumber?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    bloodRequests?: BloodRequestUncheckedCreateNestedManyWithoutRequesterInput
    inventoryHistory?: InventoryHistoryUncheckedCreateNestedManyWithoutUserInput
    donationAppointments?: DonationAppointmentUncheckedCreateNestedManyWithoutDonorInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneWithoutUsersNestedInput
    bloodRequests?: BloodRequestUpdateManyWithoutRequesterNestedInput
    inventoryHistory?: InventoryHistoryUpdateManyWithoutUserNestedInput
    donationAppointments?: DonationAppointmentUpdateManyWithoutDonorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    hospitalId?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodRequests?: BloodRequestUncheckedUpdateManyWithoutRequesterNestedInput
    inventoryHistory?: InventoryHistoryUncheckedUpdateManyWithoutUserNestedInput
    donationAppointments?: DonationAppointmentUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    passwordHash: string
    name: string
    role?: string
    hospitalId?: number | null
    bloodGroup?: string | null
    aadharNumber?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    hospitalId?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodInventoryCreateInput = {
    bloodGroup: string
    component: string
    units: number
    expiresOn: Date | string
    createdAt?: Date | string
    bank: HospitalCreateNestedOneWithoutBloodInventoryInput
  }

  export type BloodInventoryUncheckedCreateInput = {
    id?: number
    bankId: number
    bloodGroup: string
    component: string
    units: number
    expiresOn: Date | string
    createdAt?: Date | string
  }

  export type BloodInventoryUpdateInput = {
    bloodGroup?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    expiresOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: HospitalUpdateOneRequiredWithoutBloodInventoryNestedInput
  }

  export type BloodInventoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankId?: IntFieldUpdateOperationsInput | number
    bloodGroup?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    expiresOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodInventoryCreateManyInput = {
    id?: number
    bankId: number
    bloodGroup: string
    component: string
    units: number
    expiresOn: Date | string
    createdAt?: Date | string
  }

  export type BloodInventoryUpdateManyMutationInput = {
    bloodGroup?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    expiresOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodInventoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankId?: IntFieldUpdateOperationsInput | number
    bloodGroup?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    expiresOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestCreateInput = {
    bloodGroup: string
    units: number
    urgency?: string
    status?: string
    token?: string | null
    createdAt?: Date | string
    requester?: UserCreateNestedOneWithoutBloodRequestsInput
    hospital: HospitalCreateNestedOneWithoutBloodRequestsInput
  }

  export type BloodRequestUncheckedCreateInput = {
    id?: number
    requesterId?: number | null
    hospitalId: number
    bloodGroup: string
    units: number
    urgency?: string
    status?: string
    token?: string | null
    createdAt?: Date | string
  }

  export type BloodRequestUpdateInput = {
    bloodGroup?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    urgency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneWithoutBloodRequestsNestedInput
    hospital?: HospitalUpdateOneRequiredWithoutBloodRequestsNestedInput
  }

  export type BloodRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    requesterId?: NullableIntFieldUpdateOperationsInput | number | null
    hospitalId?: IntFieldUpdateOperationsInput | number
    bloodGroup?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    urgency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestCreateManyInput = {
    id?: number
    requesterId?: number | null
    hospitalId: number
    bloodGroup: string
    units: number
    urgency?: string
    status?: string
    token?: string | null
    createdAt?: Date | string
  }

  export type BloodRequestUpdateManyMutationInput = {
    bloodGroup?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    urgency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    requesterId?: NullableIntFieldUpdateOperationsInput | number | null
    hospitalId?: IntFieldUpdateOperationsInput | number
    bloodGroup?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    urgency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryHistoryCreateInput = {
    action: string
    bloodGroup: string
    component: string
    units: number
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutInventoryHistoryInput
    bank: HospitalCreateNestedOneWithoutInventoryHistoryInput
  }

  export type InventoryHistoryUncheckedCreateInput = {
    id?: number
    userId?: number | null
    action: string
    bloodGroup: string
    component: string
    units: number
    bankId: number
    createdAt?: Date | string
  }

  export type InventoryHistoryUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutInventoryHistoryNestedInput
    bank?: HospitalUpdateOneRequiredWithoutInventoryHistoryNestedInput
  }

  export type InventoryHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    bankId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryHistoryCreateManyInput = {
    id?: number
    userId?: number | null
    action: string
    bloodGroup: string
    component: string
    units: number
    bankId: number
    createdAt?: Date | string
  }

  export type InventoryHistoryUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    bankId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationAppointmentCreateInput = {
    donationType: string
    status?: string
    scheduledDate?: Date | string | null
    createdAt?: Date | string
    donor: UserCreateNestedOneWithoutDonationAppointmentsInput
    hospital?: HospitalCreateNestedOneWithoutDonationAppointmentsInput
  }

  export type DonationAppointmentUncheckedCreateInput = {
    id?: number
    donorId: number
    hospitalId?: number | null
    donationType: string
    status?: string
    scheduledDate?: Date | string | null
    createdAt?: Date | string
  }

  export type DonationAppointmentUpdateInput = {
    donationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: UserUpdateOneRequiredWithoutDonationAppointmentsNestedInput
    hospital?: HospitalUpdateOneWithoutDonationAppointmentsNestedInput
  }

  export type DonationAppointmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorId?: IntFieldUpdateOperationsInput | number
    hospitalId?: NullableIntFieldUpdateOperationsInput | number | null
    donationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationAppointmentCreateManyInput = {
    id?: number
    donorId: number
    hospitalId?: number | null
    donationType: string
    status?: string
    scheduledDate?: Date | string | null
    createdAt?: Date | string
  }

  export type DonationAppointmentUpdateManyMutationInput = {
    donationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationAppointmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorId?: IntFieldUpdateOperationsInput | number
    hospitalId?: NullableIntFieldUpdateOperationsInput | number | null
    donationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OtpVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
  }

  export type OtpVerificationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OtpVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
  }

  export type OtpVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
  }

  export type OtpVerificationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type BloodInventoryListRelationFilter = {
    every?: BloodInventoryWhereInput
    some?: BloodInventoryWhereInput
    none?: BloodInventoryWhereInput
  }

  export type BloodRequestListRelationFilter = {
    every?: BloodRequestWhereInput
    some?: BloodRequestWhereInput
    none?: BloodRequestWhereInput
  }

  export type InventoryHistoryListRelationFilter = {
    every?: InventoryHistoryWhereInput
    some?: InventoryHistoryWhereInput
    none?: InventoryHistoryWhereInput
  }

  export type DonationAppointmentListRelationFilter = {
    every?: DonationAppointmentWhereInput
    some?: DonationAppointmentWhereInput
    none?: DonationAppointmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BloodInventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BloodRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonationAppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HospitalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type HospitalAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type HospitalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type HospitalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type HospitalSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type HospitalNullableScalarRelationFilter = {
    is?: HospitalWhereInput | null
    isNot?: HospitalWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    hospitalId?: SortOrder
    bloodGroup?: SortOrder
    aadharNumber?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    hospitalId?: SortOrder
    bloodGroup?: SortOrder
    aadharNumber?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    hospitalId?: SortOrder
    bloodGroup?: SortOrder
    aadharNumber?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type HospitalScalarRelationFilter = {
    is?: HospitalWhereInput
    isNot?: HospitalWhereInput
  }

  export type BloodInventoryCountOrderByAggregateInput = {
    id?: SortOrder
    bankId?: SortOrder
    bloodGroup?: SortOrder
    component?: SortOrder
    units?: SortOrder
    expiresOn?: SortOrder
    createdAt?: SortOrder
  }

  export type BloodInventoryAvgOrderByAggregateInput = {
    id?: SortOrder
    bankId?: SortOrder
    units?: SortOrder
  }

  export type BloodInventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    bankId?: SortOrder
    bloodGroup?: SortOrder
    component?: SortOrder
    units?: SortOrder
    expiresOn?: SortOrder
    createdAt?: SortOrder
  }

  export type BloodInventoryMinOrderByAggregateInput = {
    id?: SortOrder
    bankId?: SortOrder
    bloodGroup?: SortOrder
    component?: SortOrder
    units?: SortOrder
    expiresOn?: SortOrder
    createdAt?: SortOrder
  }

  export type BloodInventorySumOrderByAggregateInput = {
    id?: SortOrder
    bankId?: SortOrder
    units?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BloodRequestCountOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    hospitalId?: SortOrder
    bloodGroup?: SortOrder
    units?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type BloodRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    hospitalId?: SortOrder
    units?: SortOrder
  }

  export type BloodRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    hospitalId?: SortOrder
    bloodGroup?: SortOrder
    units?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type BloodRequestMinOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    hospitalId?: SortOrder
    bloodGroup?: SortOrder
    units?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type BloodRequestSumOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    hospitalId?: SortOrder
    units?: SortOrder
  }

  export type InventoryHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    bloodGroup?: SortOrder
    component?: SortOrder
    units?: SortOrder
    bankId?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    units?: SortOrder
    bankId?: SortOrder
  }

  export type InventoryHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    bloodGroup?: SortOrder
    component?: SortOrder
    units?: SortOrder
    bankId?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    bloodGroup?: SortOrder
    component?: SortOrder
    units?: SortOrder
    bankId?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryHistorySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    units?: SortOrder
    bankId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DonationAppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    hospitalId?: SortOrder
    donationType?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    createdAt?: SortOrder
  }

  export type DonationAppointmentAvgOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    hospitalId?: SortOrder
  }

  export type DonationAppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    hospitalId?: SortOrder
    donationType?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    createdAt?: SortOrder
  }

  export type DonationAppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    hospitalId?: SortOrder
    donationType?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    createdAt?: SortOrder
  }

  export type DonationAppointmentSumOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    hospitalId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedManyWithoutHospitalInput = {
    create?: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput> | UserCreateWithoutHospitalInput[] | UserUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHospitalInput | UserCreateOrConnectWithoutHospitalInput[]
    createMany?: UserCreateManyHospitalInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type BloodInventoryCreateNestedManyWithoutBankInput = {
    create?: XOR<BloodInventoryCreateWithoutBankInput, BloodInventoryUncheckedCreateWithoutBankInput> | BloodInventoryCreateWithoutBankInput[] | BloodInventoryUncheckedCreateWithoutBankInput[]
    connectOrCreate?: BloodInventoryCreateOrConnectWithoutBankInput | BloodInventoryCreateOrConnectWithoutBankInput[]
    createMany?: BloodInventoryCreateManyBankInputEnvelope
    connect?: BloodInventoryWhereUniqueInput | BloodInventoryWhereUniqueInput[]
  }

  export type BloodRequestCreateNestedManyWithoutHospitalInput = {
    create?: XOR<BloodRequestCreateWithoutHospitalInput, BloodRequestUncheckedCreateWithoutHospitalInput> | BloodRequestCreateWithoutHospitalInput[] | BloodRequestUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutHospitalInput | BloodRequestCreateOrConnectWithoutHospitalInput[]
    createMany?: BloodRequestCreateManyHospitalInputEnvelope
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
  }

  export type InventoryHistoryCreateNestedManyWithoutBankInput = {
    create?: XOR<InventoryHistoryCreateWithoutBankInput, InventoryHistoryUncheckedCreateWithoutBankInput> | InventoryHistoryCreateWithoutBankInput[] | InventoryHistoryUncheckedCreateWithoutBankInput[]
    connectOrCreate?: InventoryHistoryCreateOrConnectWithoutBankInput | InventoryHistoryCreateOrConnectWithoutBankInput[]
    createMany?: InventoryHistoryCreateManyBankInputEnvelope
    connect?: InventoryHistoryWhereUniqueInput | InventoryHistoryWhereUniqueInput[]
  }

  export type DonationAppointmentCreateNestedManyWithoutHospitalInput = {
    create?: XOR<DonationAppointmentCreateWithoutHospitalInput, DonationAppointmentUncheckedCreateWithoutHospitalInput> | DonationAppointmentCreateWithoutHospitalInput[] | DonationAppointmentUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: DonationAppointmentCreateOrConnectWithoutHospitalInput | DonationAppointmentCreateOrConnectWithoutHospitalInput[]
    createMany?: DonationAppointmentCreateManyHospitalInputEnvelope
    connect?: DonationAppointmentWhereUniqueInput | DonationAppointmentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput> | UserCreateWithoutHospitalInput[] | UserUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHospitalInput | UserCreateOrConnectWithoutHospitalInput[]
    createMany?: UserCreateManyHospitalInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type BloodInventoryUncheckedCreateNestedManyWithoutBankInput = {
    create?: XOR<BloodInventoryCreateWithoutBankInput, BloodInventoryUncheckedCreateWithoutBankInput> | BloodInventoryCreateWithoutBankInput[] | BloodInventoryUncheckedCreateWithoutBankInput[]
    connectOrCreate?: BloodInventoryCreateOrConnectWithoutBankInput | BloodInventoryCreateOrConnectWithoutBankInput[]
    createMany?: BloodInventoryCreateManyBankInputEnvelope
    connect?: BloodInventoryWhereUniqueInput | BloodInventoryWhereUniqueInput[]
  }

  export type BloodRequestUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<BloodRequestCreateWithoutHospitalInput, BloodRequestUncheckedCreateWithoutHospitalInput> | BloodRequestCreateWithoutHospitalInput[] | BloodRequestUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutHospitalInput | BloodRequestCreateOrConnectWithoutHospitalInput[]
    createMany?: BloodRequestCreateManyHospitalInputEnvelope
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
  }

  export type InventoryHistoryUncheckedCreateNestedManyWithoutBankInput = {
    create?: XOR<InventoryHistoryCreateWithoutBankInput, InventoryHistoryUncheckedCreateWithoutBankInput> | InventoryHistoryCreateWithoutBankInput[] | InventoryHistoryUncheckedCreateWithoutBankInput[]
    connectOrCreate?: InventoryHistoryCreateOrConnectWithoutBankInput | InventoryHistoryCreateOrConnectWithoutBankInput[]
    createMany?: InventoryHistoryCreateManyBankInputEnvelope
    connect?: InventoryHistoryWhereUniqueInput | InventoryHistoryWhereUniqueInput[]
  }

  export type DonationAppointmentUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<DonationAppointmentCreateWithoutHospitalInput, DonationAppointmentUncheckedCreateWithoutHospitalInput> | DonationAppointmentCreateWithoutHospitalInput[] | DonationAppointmentUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: DonationAppointmentCreateOrConnectWithoutHospitalInput | DonationAppointmentCreateOrConnectWithoutHospitalInput[]
    createMany?: DonationAppointmentCreateManyHospitalInputEnvelope
    connect?: DonationAppointmentWhereUniqueInput | DonationAppointmentWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput> | UserCreateWithoutHospitalInput[] | UserUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHospitalInput | UserCreateOrConnectWithoutHospitalInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutHospitalInput | UserUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: UserCreateManyHospitalInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutHospitalInput | UserUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: UserUpdateManyWithWhereWithoutHospitalInput | UserUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type BloodInventoryUpdateManyWithoutBankNestedInput = {
    create?: XOR<BloodInventoryCreateWithoutBankInput, BloodInventoryUncheckedCreateWithoutBankInput> | BloodInventoryCreateWithoutBankInput[] | BloodInventoryUncheckedCreateWithoutBankInput[]
    connectOrCreate?: BloodInventoryCreateOrConnectWithoutBankInput | BloodInventoryCreateOrConnectWithoutBankInput[]
    upsert?: BloodInventoryUpsertWithWhereUniqueWithoutBankInput | BloodInventoryUpsertWithWhereUniqueWithoutBankInput[]
    createMany?: BloodInventoryCreateManyBankInputEnvelope
    set?: BloodInventoryWhereUniqueInput | BloodInventoryWhereUniqueInput[]
    disconnect?: BloodInventoryWhereUniqueInput | BloodInventoryWhereUniqueInput[]
    delete?: BloodInventoryWhereUniqueInput | BloodInventoryWhereUniqueInput[]
    connect?: BloodInventoryWhereUniqueInput | BloodInventoryWhereUniqueInput[]
    update?: BloodInventoryUpdateWithWhereUniqueWithoutBankInput | BloodInventoryUpdateWithWhereUniqueWithoutBankInput[]
    updateMany?: BloodInventoryUpdateManyWithWhereWithoutBankInput | BloodInventoryUpdateManyWithWhereWithoutBankInput[]
    deleteMany?: BloodInventoryScalarWhereInput | BloodInventoryScalarWhereInput[]
  }

  export type BloodRequestUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<BloodRequestCreateWithoutHospitalInput, BloodRequestUncheckedCreateWithoutHospitalInput> | BloodRequestCreateWithoutHospitalInput[] | BloodRequestUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutHospitalInput | BloodRequestCreateOrConnectWithoutHospitalInput[]
    upsert?: BloodRequestUpsertWithWhereUniqueWithoutHospitalInput | BloodRequestUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: BloodRequestCreateManyHospitalInputEnvelope
    set?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    disconnect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    delete?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    update?: BloodRequestUpdateWithWhereUniqueWithoutHospitalInput | BloodRequestUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: BloodRequestUpdateManyWithWhereWithoutHospitalInput | BloodRequestUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
  }

  export type InventoryHistoryUpdateManyWithoutBankNestedInput = {
    create?: XOR<InventoryHistoryCreateWithoutBankInput, InventoryHistoryUncheckedCreateWithoutBankInput> | InventoryHistoryCreateWithoutBankInput[] | InventoryHistoryUncheckedCreateWithoutBankInput[]
    connectOrCreate?: InventoryHistoryCreateOrConnectWithoutBankInput | InventoryHistoryCreateOrConnectWithoutBankInput[]
    upsert?: InventoryHistoryUpsertWithWhereUniqueWithoutBankInput | InventoryHistoryUpsertWithWhereUniqueWithoutBankInput[]
    createMany?: InventoryHistoryCreateManyBankInputEnvelope
    set?: InventoryHistoryWhereUniqueInput | InventoryHistoryWhereUniqueInput[]
    disconnect?: InventoryHistoryWhereUniqueInput | InventoryHistoryWhereUniqueInput[]
    delete?: InventoryHistoryWhereUniqueInput | InventoryHistoryWhereUniqueInput[]
    connect?: InventoryHistoryWhereUniqueInput | InventoryHistoryWhereUniqueInput[]
    update?: InventoryHistoryUpdateWithWhereUniqueWithoutBankInput | InventoryHistoryUpdateWithWhereUniqueWithoutBankInput[]
    updateMany?: InventoryHistoryUpdateManyWithWhereWithoutBankInput | InventoryHistoryUpdateManyWithWhereWithoutBankInput[]
    deleteMany?: InventoryHistoryScalarWhereInput | InventoryHistoryScalarWhereInput[]
  }

  export type DonationAppointmentUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<DonationAppointmentCreateWithoutHospitalInput, DonationAppointmentUncheckedCreateWithoutHospitalInput> | DonationAppointmentCreateWithoutHospitalInput[] | DonationAppointmentUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: DonationAppointmentCreateOrConnectWithoutHospitalInput | DonationAppointmentCreateOrConnectWithoutHospitalInput[]
    upsert?: DonationAppointmentUpsertWithWhereUniqueWithoutHospitalInput | DonationAppointmentUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: DonationAppointmentCreateManyHospitalInputEnvelope
    set?: DonationAppointmentWhereUniqueInput | DonationAppointmentWhereUniqueInput[]
    disconnect?: DonationAppointmentWhereUniqueInput | DonationAppointmentWhereUniqueInput[]
    delete?: DonationAppointmentWhereUniqueInput | DonationAppointmentWhereUniqueInput[]
    connect?: DonationAppointmentWhereUniqueInput | DonationAppointmentWhereUniqueInput[]
    update?: DonationAppointmentUpdateWithWhereUniqueWithoutHospitalInput | DonationAppointmentUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: DonationAppointmentUpdateManyWithWhereWithoutHospitalInput | DonationAppointmentUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: DonationAppointmentScalarWhereInput | DonationAppointmentScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput> | UserCreateWithoutHospitalInput[] | UserUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHospitalInput | UserCreateOrConnectWithoutHospitalInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutHospitalInput | UserUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: UserCreateManyHospitalInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutHospitalInput | UserUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: UserUpdateManyWithWhereWithoutHospitalInput | UserUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type BloodInventoryUncheckedUpdateManyWithoutBankNestedInput = {
    create?: XOR<BloodInventoryCreateWithoutBankInput, BloodInventoryUncheckedCreateWithoutBankInput> | BloodInventoryCreateWithoutBankInput[] | BloodInventoryUncheckedCreateWithoutBankInput[]
    connectOrCreate?: BloodInventoryCreateOrConnectWithoutBankInput | BloodInventoryCreateOrConnectWithoutBankInput[]
    upsert?: BloodInventoryUpsertWithWhereUniqueWithoutBankInput | BloodInventoryUpsertWithWhereUniqueWithoutBankInput[]
    createMany?: BloodInventoryCreateManyBankInputEnvelope
    set?: BloodInventoryWhereUniqueInput | BloodInventoryWhereUniqueInput[]
    disconnect?: BloodInventoryWhereUniqueInput | BloodInventoryWhereUniqueInput[]
    delete?: BloodInventoryWhereUniqueInput | BloodInventoryWhereUniqueInput[]
    connect?: BloodInventoryWhereUniqueInput | BloodInventoryWhereUniqueInput[]
    update?: BloodInventoryUpdateWithWhereUniqueWithoutBankInput | BloodInventoryUpdateWithWhereUniqueWithoutBankInput[]
    updateMany?: BloodInventoryUpdateManyWithWhereWithoutBankInput | BloodInventoryUpdateManyWithWhereWithoutBankInput[]
    deleteMany?: BloodInventoryScalarWhereInput | BloodInventoryScalarWhereInput[]
  }

  export type BloodRequestUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<BloodRequestCreateWithoutHospitalInput, BloodRequestUncheckedCreateWithoutHospitalInput> | BloodRequestCreateWithoutHospitalInput[] | BloodRequestUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutHospitalInput | BloodRequestCreateOrConnectWithoutHospitalInput[]
    upsert?: BloodRequestUpsertWithWhereUniqueWithoutHospitalInput | BloodRequestUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: BloodRequestCreateManyHospitalInputEnvelope
    set?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    disconnect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    delete?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    update?: BloodRequestUpdateWithWhereUniqueWithoutHospitalInput | BloodRequestUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: BloodRequestUpdateManyWithWhereWithoutHospitalInput | BloodRequestUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
  }

  export type InventoryHistoryUncheckedUpdateManyWithoutBankNestedInput = {
    create?: XOR<InventoryHistoryCreateWithoutBankInput, InventoryHistoryUncheckedCreateWithoutBankInput> | InventoryHistoryCreateWithoutBankInput[] | InventoryHistoryUncheckedCreateWithoutBankInput[]
    connectOrCreate?: InventoryHistoryCreateOrConnectWithoutBankInput | InventoryHistoryCreateOrConnectWithoutBankInput[]
    upsert?: InventoryHistoryUpsertWithWhereUniqueWithoutBankInput | InventoryHistoryUpsertWithWhereUniqueWithoutBankInput[]
    createMany?: InventoryHistoryCreateManyBankInputEnvelope
    set?: InventoryHistoryWhereUniqueInput | InventoryHistoryWhereUniqueInput[]
    disconnect?: InventoryHistoryWhereUniqueInput | InventoryHistoryWhereUniqueInput[]
    delete?: InventoryHistoryWhereUniqueInput | InventoryHistoryWhereUniqueInput[]
    connect?: InventoryHistoryWhereUniqueInput | InventoryHistoryWhereUniqueInput[]
    update?: InventoryHistoryUpdateWithWhereUniqueWithoutBankInput | InventoryHistoryUpdateWithWhereUniqueWithoutBankInput[]
    updateMany?: InventoryHistoryUpdateManyWithWhereWithoutBankInput | InventoryHistoryUpdateManyWithWhereWithoutBankInput[]
    deleteMany?: InventoryHistoryScalarWhereInput | InventoryHistoryScalarWhereInput[]
  }

  export type DonationAppointmentUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<DonationAppointmentCreateWithoutHospitalInput, DonationAppointmentUncheckedCreateWithoutHospitalInput> | DonationAppointmentCreateWithoutHospitalInput[] | DonationAppointmentUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: DonationAppointmentCreateOrConnectWithoutHospitalInput | DonationAppointmentCreateOrConnectWithoutHospitalInput[]
    upsert?: DonationAppointmentUpsertWithWhereUniqueWithoutHospitalInput | DonationAppointmentUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: DonationAppointmentCreateManyHospitalInputEnvelope
    set?: DonationAppointmentWhereUniqueInput | DonationAppointmentWhereUniqueInput[]
    disconnect?: DonationAppointmentWhereUniqueInput | DonationAppointmentWhereUniqueInput[]
    delete?: DonationAppointmentWhereUniqueInput | DonationAppointmentWhereUniqueInput[]
    connect?: DonationAppointmentWhereUniqueInput | DonationAppointmentWhereUniqueInput[]
    update?: DonationAppointmentUpdateWithWhereUniqueWithoutHospitalInput | DonationAppointmentUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: DonationAppointmentUpdateManyWithWhereWithoutHospitalInput | DonationAppointmentUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: DonationAppointmentScalarWhereInput | DonationAppointmentScalarWhereInput[]
  }

  export type HospitalCreateNestedOneWithoutUsersInput = {
    create?: XOR<HospitalCreateWithoutUsersInput, HospitalUncheckedCreateWithoutUsersInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutUsersInput
    connect?: HospitalWhereUniqueInput
  }

  export type BloodRequestCreateNestedManyWithoutRequesterInput = {
    create?: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput> | BloodRequestCreateWithoutRequesterInput[] | BloodRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutRequesterInput | BloodRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: BloodRequestCreateManyRequesterInputEnvelope
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
  }

  export type InventoryHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<InventoryHistoryCreateWithoutUserInput, InventoryHistoryUncheckedCreateWithoutUserInput> | InventoryHistoryCreateWithoutUserInput[] | InventoryHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryHistoryCreateOrConnectWithoutUserInput | InventoryHistoryCreateOrConnectWithoutUserInput[]
    createMany?: InventoryHistoryCreateManyUserInputEnvelope
    connect?: InventoryHistoryWhereUniqueInput | InventoryHistoryWhereUniqueInput[]
  }

  export type DonationAppointmentCreateNestedManyWithoutDonorInput = {
    create?: XOR<DonationAppointmentCreateWithoutDonorInput, DonationAppointmentUncheckedCreateWithoutDonorInput> | DonationAppointmentCreateWithoutDonorInput[] | DonationAppointmentUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationAppointmentCreateOrConnectWithoutDonorInput | DonationAppointmentCreateOrConnectWithoutDonorInput[]
    createMany?: DonationAppointmentCreateManyDonorInputEnvelope
    connect?: DonationAppointmentWhereUniqueInput | DonationAppointmentWhereUniqueInput[]
  }

  export type BloodRequestUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput> | BloodRequestCreateWithoutRequesterInput[] | BloodRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutRequesterInput | BloodRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: BloodRequestCreateManyRequesterInputEnvelope
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
  }

  export type InventoryHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InventoryHistoryCreateWithoutUserInput, InventoryHistoryUncheckedCreateWithoutUserInput> | InventoryHistoryCreateWithoutUserInput[] | InventoryHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryHistoryCreateOrConnectWithoutUserInput | InventoryHistoryCreateOrConnectWithoutUserInput[]
    createMany?: InventoryHistoryCreateManyUserInputEnvelope
    connect?: InventoryHistoryWhereUniqueInput | InventoryHistoryWhereUniqueInput[]
  }

  export type DonationAppointmentUncheckedCreateNestedManyWithoutDonorInput = {
    create?: XOR<DonationAppointmentCreateWithoutDonorInput, DonationAppointmentUncheckedCreateWithoutDonorInput> | DonationAppointmentCreateWithoutDonorInput[] | DonationAppointmentUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationAppointmentCreateOrConnectWithoutDonorInput | DonationAppointmentCreateOrConnectWithoutDonorInput[]
    createMany?: DonationAppointmentCreateManyDonorInputEnvelope
    connect?: DonationAppointmentWhereUniqueInput | DonationAppointmentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type HospitalUpdateOneWithoutUsersNestedInput = {
    create?: XOR<HospitalCreateWithoutUsersInput, HospitalUncheckedCreateWithoutUsersInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutUsersInput
    upsert?: HospitalUpsertWithoutUsersInput
    disconnect?: HospitalWhereInput | boolean
    delete?: HospitalWhereInput | boolean
    connect?: HospitalWhereUniqueInput
    update?: XOR<XOR<HospitalUpdateToOneWithWhereWithoutUsersInput, HospitalUpdateWithoutUsersInput>, HospitalUncheckedUpdateWithoutUsersInput>
  }

  export type BloodRequestUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput> | BloodRequestCreateWithoutRequesterInput[] | BloodRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutRequesterInput | BloodRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: BloodRequestUpsertWithWhereUniqueWithoutRequesterInput | BloodRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: BloodRequestCreateManyRequesterInputEnvelope
    set?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    disconnect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    delete?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    update?: BloodRequestUpdateWithWhereUniqueWithoutRequesterInput | BloodRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: BloodRequestUpdateManyWithWhereWithoutRequesterInput | BloodRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
  }

  export type InventoryHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<InventoryHistoryCreateWithoutUserInput, InventoryHistoryUncheckedCreateWithoutUserInput> | InventoryHistoryCreateWithoutUserInput[] | InventoryHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryHistoryCreateOrConnectWithoutUserInput | InventoryHistoryCreateOrConnectWithoutUserInput[]
    upsert?: InventoryHistoryUpsertWithWhereUniqueWithoutUserInput | InventoryHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InventoryHistoryCreateManyUserInputEnvelope
    set?: InventoryHistoryWhereUniqueInput | InventoryHistoryWhereUniqueInput[]
    disconnect?: InventoryHistoryWhereUniqueInput | InventoryHistoryWhereUniqueInput[]
    delete?: InventoryHistoryWhereUniqueInput | InventoryHistoryWhereUniqueInput[]
    connect?: InventoryHistoryWhereUniqueInput | InventoryHistoryWhereUniqueInput[]
    update?: InventoryHistoryUpdateWithWhereUniqueWithoutUserInput | InventoryHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InventoryHistoryUpdateManyWithWhereWithoutUserInput | InventoryHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InventoryHistoryScalarWhereInput | InventoryHistoryScalarWhereInput[]
  }

  export type DonationAppointmentUpdateManyWithoutDonorNestedInput = {
    create?: XOR<DonationAppointmentCreateWithoutDonorInput, DonationAppointmentUncheckedCreateWithoutDonorInput> | DonationAppointmentCreateWithoutDonorInput[] | DonationAppointmentUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationAppointmentCreateOrConnectWithoutDonorInput | DonationAppointmentCreateOrConnectWithoutDonorInput[]
    upsert?: DonationAppointmentUpsertWithWhereUniqueWithoutDonorInput | DonationAppointmentUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: DonationAppointmentCreateManyDonorInputEnvelope
    set?: DonationAppointmentWhereUniqueInput | DonationAppointmentWhereUniqueInput[]
    disconnect?: DonationAppointmentWhereUniqueInput | DonationAppointmentWhereUniqueInput[]
    delete?: DonationAppointmentWhereUniqueInput | DonationAppointmentWhereUniqueInput[]
    connect?: DonationAppointmentWhereUniqueInput | DonationAppointmentWhereUniqueInput[]
    update?: DonationAppointmentUpdateWithWhereUniqueWithoutDonorInput | DonationAppointmentUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: DonationAppointmentUpdateManyWithWhereWithoutDonorInput | DonationAppointmentUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: DonationAppointmentScalarWhereInput | DonationAppointmentScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BloodRequestUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput> | BloodRequestCreateWithoutRequesterInput[] | BloodRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutRequesterInput | BloodRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: BloodRequestUpsertWithWhereUniqueWithoutRequesterInput | BloodRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: BloodRequestCreateManyRequesterInputEnvelope
    set?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    disconnect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    delete?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    update?: BloodRequestUpdateWithWhereUniqueWithoutRequesterInput | BloodRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: BloodRequestUpdateManyWithWhereWithoutRequesterInput | BloodRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
  }

  export type InventoryHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InventoryHistoryCreateWithoutUserInput, InventoryHistoryUncheckedCreateWithoutUserInput> | InventoryHistoryCreateWithoutUserInput[] | InventoryHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryHistoryCreateOrConnectWithoutUserInput | InventoryHistoryCreateOrConnectWithoutUserInput[]
    upsert?: InventoryHistoryUpsertWithWhereUniqueWithoutUserInput | InventoryHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InventoryHistoryCreateManyUserInputEnvelope
    set?: InventoryHistoryWhereUniqueInput | InventoryHistoryWhereUniqueInput[]
    disconnect?: InventoryHistoryWhereUniqueInput | InventoryHistoryWhereUniqueInput[]
    delete?: InventoryHistoryWhereUniqueInput | InventoryHistoryWhereUniqueInput[]
    connect?: InventoryHistoryWhereUniqueInput | InventoryHistoryWhereUniqueInput[]
    update?: InventoryHistoryUpdateWithWhereUniqueWithoutUserInput | InventoryHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InventoryHistoryUpdateManyWithWhereWithoutUserInput | InventoryHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InventoryHistoryScalarWhereInput | InventoryHistoryScalarWhereInput[]
  }

  export type DonationAppointmentUncheckedUpdateManyWithoutDonorNestedInput = {
    create?: XOR<DonationAppointmentCreateWithoutDonorInput, DonationAppointmentUncheckedCreateWithoutDonorInput> | DonationAppointmentCreateWithoutDonorInput[] | DonationAppointmentUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationAppointmentCreateOrConnectWithoutDonorInput | DonationAppointmentCreateOrConnectWithoutDonorInput[]
    upsert?: DonationAppointmentUpsertWithWhereUniqueWithoutDonorInput | DonationAppointmentUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: DonationAppointmentCreateManyDonorInputEnvelope
    set?: DonationAppointmentWhereUniqueInput | DonationAppointmentWhereUniqueInput[]
    disconnect?: DonationAppointmentWhereUniqueInput | DonationAppointmentWhereUniqueInput[]
    delete?: DonationAppointmentWhereUniqueInput | DonationAppointmentWhereUniqueInput[]
    connect?: DonationAppointmentWhereUniqueInput | DonationAppointmentWhereUniqueInput[]
    update?: DonationAppointmentUpdateWithWhereUniqueWithoutDonorInput | DonationAppointmentUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: DonationAppointmentUpdateManyWithWhereWithoutDonorInput | DonationAppointmentUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: DonationAppointmentScalarWhereInput | DonationAppointmentScalarWhereInput[]
  }

  export type HospitalCreateNestedOneWithoutBloodInventoryInput = {
    create?: XOR<HospitalCreateWithoutBloodInventoryInput, HospitalUncheckedCreateWithoutBloodInventoryInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutBloodInventoryInput
    connect?: HospitalWhereUniqueInput
  }

  export type HospitalUpdateOneRequiredWithoutBloodInventoryNestedInput = {
    create?: XOR<HospitalCreateWithoutBloodInventoryInput, HospitalUncheckedCreateWithoutBloodInventoryInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutBloodInventoryInput
    upsert?: HospitalUpsertWithoutBloodInventoryInput
    connect?: HospitalWhereUniqueInput
    update?: XOR<XOR<HospitalUpdateToOneWithWhereWithoutBloodInventoryInput, HospitalUpdateWithoutBloodInventoryInput>, HospitalUncheckedUpdateWithoutBloodInventoryInput>
  }

  export type UserCreateNestedOneWithoutBloodRequestsInput = {
    create?: XOR<UserCreateWithoutBloodRequestsInput, UserUncheckedCreateWithoutBloodRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBloodRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type HospitalCreateNestedOneWithoutBloodRequestsInput = {
    create?: XOR<HospitalCreateWithoutBloodRequestsInput, HospitalUncheckedCreateWithoutBloodRequestsInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutBloodRequestsInput
    connect?: HospitalWhereUniqueInput
  }

  export type UserUpdateOneWithoutBloodRequestsNestedInput = {
    create?: XOR<UserCreateWithoutBloodRequestsInput, UserUncheckedCreateWithoutBloodRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBloodRequestsInput
    upsert?: UserUpsertWithoutBloodRequestsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBloodRequestsInput, UserUpdateWithoutBloodRequestsInput>, UserUncheckedUpdateWithoutBloodRequestsInput>
  }

  export type HospitalUpdateOneRequiredWithoutBloodRequestsNestedInput = {
    create?: XOR<HospitalCreateWithoutBloodRequestsInput, HospitalUncheckedCreateWithoutBloodRequestsInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutBloodRequestsInput
    upsert?: HospitalUpsertWithoutBloodRequestsInput
    connect?: HospitalWhereUniqueInput
    update?: XOR<XOR<HospitalUpdateToOneWithWhereWithoutBloodRequestsInput, HospitalUpdateWithoutBloodRequestsInput>, HospitalUncheckedUpdateWithoutBloodRequestsInput>
  }

  export type UserCreateNestedOneWithoutInventoryHistoryInput = {
    create?: XOR<UserCreateWithoutInventoryHistoryInput, UserUncheckedCreateWithoutInventoryHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type HospitalCreateNestedOneWithoutInventoryHistoryInput = {
    create?: XOR<HospitalCreateWithoutInventoryHistoryInput, HospitalUncheckedCreateWithoutInventoryHistoryInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutInventoryHistoryInput
    connect?: HospitalWhereUniqueInput
  }

  export type UserUpdateOneWithoutInventoryHistoryNestedInput = {
    create?: XOR<UserCreateWithoutInventoryHistoryInput, UserUncheckedCreateWithoutInventoryHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryHistoryInput
    upsert?: UserUpsertWithoutInventoryHistoryInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInventoryHistoryInput, UserUpdateWithoutInventoryHistoryInput>, UserUncheckedUpdateWithoutInventoryHistoryInput>
  }

  export type HospitalUpdateOneRequiredWithoutInventoryHistoryNestedInput = {
    create?: XOR<HospitalCreateWithoutInventoryHistoryInput, HospitalUncheckedCreateWithoutInventoryHistoryInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutInventoryHistoryInput
    upsert?: HospitalUpsertWithoutInventoryHistoryInput
    connect?: HospitalWhereUniqueInput
    update?: XOR<XOR<HospitalUpdateToOneWithWhereWithoutInventoryHistoryInput, HospitalUpdateWithoutInventoryHistoryInput>, HospitalUncheckedUpdateWithoutInventoryHistoryInput>
  }

  export type UserCreateNestedOneWithoutDonationAppointmentsInput = {
    create?: XOR<UserCreateWithoutDonationAppointmentsInput, UserUncheckedCreateWithoutDonationAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type HospitalCreateNestedOneWithoutDonationAppointmentsInput = {
    create?: XOR<HospitalCreateWithoutDonationAppointmentsInput, HospitalUncheckedCreateWithoutDonationAppointmentsInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutDonationAppointmentsInput
    connect?: HospitalWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutDonationAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutDonationAppointmentsInput, UserUncheckedCreateWithoutDonationAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationAppointmentsInput
    upsert?: UserUpsertWithoutDonationAppointmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDonationAppointmentsInput, UserUpdateWithoutDonationAppointmentsInput>, UserUncheckedUpdateWithoutDonationAppointmentsInput>
  }

  export type HospitalUpdateOneWithoutDonationAppointmentsNestedInput = {
    create?: XOR<HospitalCreateWithoutDonationAppointmentsInput, HospitalUncheckedCreateWithoutDonationAppointmentsInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutDonationAppointmentsInput
    upsert?: HospitalUpsertWithoutDonationAppointmentsInput
    disconnect?: HospitalWhereInput | boolean
    delete?: HospitalWhereInput | boolean
    connect?: HospitalWhereUniqueInput
    update?: XOR<XOR<HospitalUpdateToOneWithWhereWithoutDonationAppointmentsInput, HospitalUpdateWithoutDonationAppointmentsInput>, HospitalUncheckedUpdateWithoutDonationAppointmentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutHospitalInput = {
    email: string
    passwordHash: string
    name: string
    role?: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    bloodRequests?: BloodRequestCreateNestedManyWithoutRequesterInput
    inventoryHistory?: InventoryHistoryCreateNestedManyWithoutUserInput
    donationAppointments?: DonationAppointmentCreateNestedManyWithoutDonorInput
  }

  export type UserUncheckedCreateWithoutHospitalInput = {
    id?: number
    email: string
    passwordHash: string
    name: string
    role?: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    bloodRequests?: BloodRequestUncheckedCreateNestedManyWithoutRequesterInput
    inventoryHistory?: InventoryHistoryUncheckedCreateNestedManyWithoutUserInput
    donationAppointments?: DonationAppointmentUncheckedCreateNestedManyWithoutDonorInput
  }

  export type UserCreateOrConnectWithoutHospitalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput>
  }

  export type UserCreateManyHospitalInputEnvelope = {
    data: UserCreateManyHospitalInput | UserCreateManyHospitalInput[]
    skipDuplicates?: boolean
  }

  export type BloodInventoryCreateWithoutBankInput = {
    bloodGroup: string
    component: string
    units: number
    expiresOn: Date | string
    createdAt?: Date | string
  }

  export type BloodInventoryUncheckedCreateWithoutBankInput = {
    id?: number
    bloodGroup: string
    component: string
    units: number
    expiresOn: Date | string
    createdAt?: Date | string
  }

  export type BloodInventoryCreateOrConnectWithoutBankInput = {
    where: BloodInventoryWhereUniqueInput
    create: XOR<BloodInventoryCreateWithoutBankInput, BloodInventoryUncheckedCreateWithoutBankInput>
  }

  export type BloodInventoryCreateManyBankInputEnvelope = {
    data: BloodInventoryCreateManyBankInput | BloodInventoryCreateManyBankInput[]
    skipDuplicates?: boolean
  }

  export type BloodRequestCreateWithoutHospitalInput = {
    bloodGroup: string
    units: number
    urgency?: string
    status?: string
    token?: string | null
    createdAt?: Date | string
    requester?: UserCreateNestedOneWithoutBloodRequestsInput
  }

  export type BloodRequestUncheckedCreateWithoutHospitalInput = {
    id?: number
    requesterId?: number | null
    bloodGroup: string
    units: number
    urgency?: string
    status?: string
    token?: string | null
    createdAt?: Date | string
  }

  export type BloodRequestCreateOrConnectWithoutHospitalInput = {
    where: BloodRequestWhereUniqueInput
    create: XOR<BloodRequestCreateWithoutHospitalInput, BloodRequestUncheckedCreateWithoutHospitalInput>
  }

  export type BloodRequestCreateManyHospitalInputEnvelope = {
    data: BloodRequestCreateManyHospitalInput | BloodRequestCreateManyHospitalInput[]
    skipDuplicates?: boolean
  }

  export type InventoryHistoryCreateWithoutBankInput = {
    action: string
    bloodGroup: string
    component: string
    units: number
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutInventoryHistoryInput
  }

  export type InventoryHistoryUncheckedCreateWithoutBankInput = {
    id?: number
    userId?: number | null
    action: string
    bloodGroup: string
    component: string
    units: number
    createdAt?: Date | string
  }

  export type InventoryHistoryCreateOrConnectWithoutBankInput = {
    where: InventoryHistoryWhereUniqueInput
    create: XOR<InventoryHistoryCreateWithoutBankInput, InventoryHistoryUncheckedCreateWithoutBankInput>
  }

  export type InventoryHistoryCreateManyBankInputEnvelope = {
    data: InventoryHistoryCreateManyBankInput | InventoryHistoryCreateManyBankInput[]
    skipDuplicates?: boolean
  }

  export type DonationAppointmentCreateWithoutHospitalInput = {
    donationType: string
    status?: string
    scheduledDate?: Date | string | null
    createdAt?: Date | string
    donor: UserCreateNestedOneWithoutDonationAppointmentsInput
  }

  export type DonationAppointmentUncheckedCreateWithoutHospitalInput = {
    id?: number
    donorId: number
    donationType: string
    status?: string
    scheduledDate?: Date | string | null
    createdAt?: Date | string
  }

  export type DonationAppointmentCreateOrConnectWithoutHospitalInput = {
    where: DonationAppointmentWhereUniqueInput
    create: XOR<DonationAppointmentCreateWithoutHospitalInput, DonationAppointmentUncheckedCreateWithoutHospitalInput>
  }

  export type DonationAppointmentCreateManyHospitalInputEnvelope = {
    data: DonationAppointmentCreateManyHospitalInput | DonationAppointmentCreateManyHospitalInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutHospitalInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutHospitalInput, UserUncheckedUpdateWithoutHospitalInput>
    create: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput>
  }

  export type UserUpdateWithWhereUniqueWithoutHospitalInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutHospitalInput, UserUncheckedUpdateWithoutHospitalInput>
  }

  export type UserUpdateManyWithWhereWithoutHospitalInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutHospitalInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    hospitalId?: IntNullableFilter<"User"> | number | null
    bloodGroup?: StringNullableFilter<"User"> | string | null
    aadharNumber?: StringNullableFilter<"User"> | string | null
    latitude?: FloatNullableFilter<"User"> | number | null
    longitude?: FloatNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type BloodInventoryUpsertWithWhereUniqueWithoutBankInput = {
    where: BloodInventoryWhereUniqueInput
    update: XOR<BloodInventoryUpdateWithoutBankInput, BloodInventoryUncheckedUpdateWithoutBankInput>
    create: XOR<BloodInventoryCreateWithoutBankInput, BloodInventoryUncheckedCreateWithoutBankInput>
  }

  export type BloodInventoryUpdateWithWhereUniqueWithoutBankInput = {
    where: BloodInventoryWhereUniqueInput
    data: XOR<BloodInventoryUpdateWithoutBankInput, BloodInventoryUncheckedUpdateWithoutBankInput>
  }

  export type BloodInventoryUpdateManyWithWhereWithoutBankInput = {
    where: BloodInventoryScalarWhereInput
    data: XOR<BloodInventoryUpdateManyMutationInput, BloodInventoryUncheckedUpdateManyWithoutBankInput>
  }

  export type BloodInventoryScalarWhereInput = {
    AND?: BloodInventoryScalarWhereInput | BloodInventoryScalarWhereInput[]
    OR?: BloodInventoryScalarWhereInput[]
    NOT?: BloodInventoryScalarWhereInput | BloodInventoryScalarWhereInput[]
    id?: IntFilter<"BloodInventory"> | number
    bankId?: IntFilter<"BloodInventory"> | number
    bloodGroup?: StringFilter<"BloodInventory"> | string
    component?: StringFilter<"BloodInventory"> | string
    units?: IntFilter<"BloodInventory"> | number
    expiresOn?: DateTimeFilter<"BloodInventory"> | Date | string
    createdAt?: DateTimeFilter<"BloodInventory"> | Date | string
  }

  export type BloodRequestUpsertWithWhereUniqueWithoutHospitalInput = {
    where: BloodRequestWhereUniqueInput
    update: XOR<BloodRequestUpdateWithoutHospitalInput, BloodRequestUncheckedUpdateWithoutHospitalInput>
    create: XOR<BloodRequestCreateWithoutHospitalInput, BloodRequestUncheckedCreateWithoutHospitalInput>
  }

  export type BloodRequestUpdateWithWhereUniqueWithoutHospitalInput = {
    where: BloodRequestWhereUniqueInput
    data: XOR<BloodRequestUpdateWithoutHospitalInput, BloodRequestUncheckedUpdateWithoutHospitalInput>
  }

  export type BloodRequestUpdateManyWithWhereWithoutHospitalInput = {
    where: BloodRequestScalarWhereInput
    data: XOR<BloodRequestUpdateManyMutationInput, BloodRequestUncheckedUpdateManyWithoutHospitalInput>
  }

  export type BloodRequestScalarWhereInput = {
    AND?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
    OR?: BloodRequestScalarWhereInput[]
    NOT?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
    id?: IntFilter<"BloodRequest"> | number
    requesterId?: IntNullableFilter<"BloodRequest"> | number | null
    hospitalId?: IntFilter<"BloodRequest"> | number
    bloodGroup?: StringFilter<"BloodRequest"> | string
    units?: IntFilter<"BloodRequest"> | number
    urgency?: StringFilter<"BloodRequest"> | string
    status?: StringFilter<"BloodRequest"> | string
    token?: StringNullableFilter<"BloodRequest"> | string | null
    createdAt?: DateTimeFilter<"BloodRequest"> | Date | string
  }

  export type InventoryHistoryUpsertWithWhereUniqueWithoutBankInput = {
    where: InventoryHistoryWhereUniqueInput
    update: XOR<InventoryHistoryUpdateWithoutBankInput, InventoryHistoryUncheckedUpdateWithoutBankInput>
    create: XOR<InventoryHistoryCreateWithoutBankInput, InventoryHistoryUncheckedCreateWithoutBankInput>
  }

  export type InventoryHistoryUpdateWithWhereUniqueWithoutBankInput = {
    where: InventoryHistoryWhereUniqueInput
    data: XOR<InventoryHistoryUpdateWithoutBankInput, InventoryHistoryUncheckedUpdateWithoutBankInput>
  }

  export type InventoryHistoryUpdateManyWithWhereWithoutBankInput = {
    where: InventoryHistoryScalarWhereInput
    data: XOR<InventoryHistoryUpdateManyMutationInput, InventoryHistoryUncheckedUpdateManyWithoutBankInput>
  }

  export type InventoryHistoryScalarWhereInput = {
    AND?: InventoryHistoryScalarWhereInput | InventoryHistoryScalarWhereInput[]
    OR?: InventoryHistoryScalarWhereInput[]
    NOT?: InventoryHistoryScalarWhereInput | InventoryHistoryScalarWhereInput[]
    id?: IntFilter<"InventoryHistory"> | number
    userId?: IntNullableFilter<"InventoryHistory"> | number | null
    action?: StringFilter<"InventoryHistory"> | string
    bloodGroup?: StringFilter<"InventoryHistory"> | string
    component?: StringFilter<"InventoryHistory"> | string
    units?: IntFilter<"InventoryHistory"> | number
    bankId?: IntFilter<"InventoryHistory"> | number
    createdAt?: DateTimeFilter<"InventoryHistory"> | Date | string
  }

  export type DonationAppointmentUpsertWithWhereUniqueWithoutHospitalInput = {
    where: DonationAppointmentWhereUniqueInput
    update: XOR<DonationAppointmentUpdateWithoutHospitalInput, DonationAppointmentUncheckedUpdateWithoutHospitalInput>
    create: XOR<DonationAppointmentCreateWithoutHospitalInput, DonationAppointmentUncheckedCreateWithoutHospitalInput>
  }

  export type DonationAppointmentUpdateWithWhereUniqueWithoutHospitalInput = {
    where: DonationAppointmentWhereUniqueInput
    data: XOR<DonationAppointmentUpdateWithoutHospitalInput, DonationAppointmentUncheckedUpdateWithoutHospitalInput>
  }

  export type DonationAppointmentUpdateManyWithWhereWithoutHospitalInput = {
    where: DonationAppointmentScalarWhereInput
    data: XOR<DonationAppointmentUpdateManyMutationInput, DonationAppointmentUncheckedUpdateManyWithoutHospitalInput>
  }

  export type DonationAppointmentScalarWhereInput = {
    AND?: DonationAppointmentScalarWhereInput | DonationAppointmentScalarWhereInput[]
    OR?: DonationAppointmentScalarWhereInput[]
    NOT?: DonationAppointmentScalarWhereInput | DonationAppointmentScalarWhereInput[]
    id?: IntFilter<"DonationAppointment"> | number
    donorId?: IntFilter<"DonationAppointment"> | number
    hospitalId?: IntNullableFilter<"DonationAppointment"> | number | null
    donationType?: StringFilter<"DonationAppointment"> | string
    status?: StringFilter<"DonationAppointment"> | string
    scheduledDate?: DateTimeNullableFilter<"DonationAppointment"> | Date | string | null
    createdAt?: DateTimeFilter<"DonationAppointment"> | Date | string
  }

  export type HospitalCreateWithoutUsersInput = {
    name: string
    city: string
    latitude?: number | null
    longitude?: number | null
    bloodInventory?: BloodInventoryCreateNestedManyWithoutBankInput
    bloodRequests?: BloodRequestCreateNestedManyWithoutHospitalInput
    inventoryHistory?: InventoryHistoryCreateNestedManyWithoutBankInput
    donationAppointments?: DonationAppointmentCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    city: string
    latitude?: number | null
    longitude?: number | null
    bloodInventory?: BloodInventoryUncheckedCreateNestedManyWithoutBankInput
    bloodRequests?: BloodRequestUncheckedCreateNestedManyWithoutHospitalInput
    inventoryHistory?: InventoryHistoryUncheckedCreateNestedManyWithoutBankInput
    donationAppointments?: DonationAppointmentUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalCreateOrConnectWithoutUsersInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutUsersInput, HospitalUncheckedCreateWithoutUsersInput>
  }

  export type BloodRequestCreateWithoutRequesterInput = {
    bloodGroup: string
    units: number
    urgency?: string
    status?: string
    token?: string | null
    createdAt?: Date | string
    hospital: HospitalCreateNestedOneWithoutBloodRequestsInput
  }

  export type BloodRequestUncheckedCreateWithoutRequesterInput = {
    id?: number
    hospitalId: number
    bloodGroup: string
    units: number
    urgency?: string
    status?: string
    token?: string | null
    createdAt?: Date | string
  }

  export type BloodRequestCreateOrConnectWithoutRequesterInput = {
    where: BloodRequestWhereUniqueInput
    create: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput>
  }

  export type BloodRequestCreateManyRequesterInputEnvelope = {
    data: BloodRequestCreateManyRequesterInput | BloodRequestCreateManyRequesterInput[]
    skipDuplicates?: boolean
  }

  export type InventoryHistoryCreateWithoutUserInput = {
    action: string
    bloodGroup: string
    component: string
    units: number
    createdAt?: Date | string
    bank: HospitalCreateNestedOneWithoutInventoryHistoryInput
  }

  export type InventoryHistoryUncheckedCreateWithoutUserInput = {
    id?: number
    action: string
    bloodGroup: string
    component: string
    units: number
    bankId: number
    createdAt?: Date | string
  }

  export type InventoryHistoryCreateOrConnectWithoutUserInput = {
    where: InventoryHistoryWhereUniqueInput
    create: XOR<InventoryHistoryCreateWithoutUserInput, InventoryHistoryUncheckedCreateWithoutUserInput>
  }

  export type InventoryHistoryCreateManyUserInputEnvelope = {
    data: InventoryHistoryCreateManyUserInput | InventoryHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DonationAppointmentCreateWithoutDonorInput = {
    donationType: string
    status?: string
    scheduledDate?: Date | string | null
    createdAt?: Date | string
    hospital?: HospitalCreateNestedOneWithoutDonationAppointmentsInput
  }

  export type DonationAppointmentUncheckedCreateWithoutDonorInput = {
    id?: number
    hospitalId?: number | null
    donationType: string
    status?: string
    scheduledDate?: Date | string | null
    createdAt?: Date | string
  }

  export type DonationAppointmentCreateOrConnectWithoutDonorInput = {
    where: DonationAppointmentWhereUniqueInput
    create: XOR<DonationAppointmentCreateWithoutDonorInput, DonationAppointmentUncheckedCreateWithoutDonorInput>
  }

  export type DonationAppointmentCreateManyDonorInputEnvelope = {
    data: DonationAppointmentCreateManyDonorInput | DonationAppointmentCreateManyDonorInput[]
    skipDuplicates?: boolean
  }

  export type HospitalUpsertWithoutUsersInput = {
    update: XOR<HospitalUpdateWithoutUsersInput, HospitalUncheckedUpdateWithoutUsersInput>
    create: XOR<HospitalCreateWithoutUsersInput, HospitalUncheckedCreateWithoutUsersInput>
    where?: HospitalWhereInput
  }

  export type HospitalUpdateToOneWithWhereWithoutUsersInput = {
    where?: HospitalWhereInput
    data: XOR<HospitalUpdateWithoutUsersInput, HospitalUncheckedUpdateWithoutUsersInput>
  }

  export type HospitalUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bloodInventory?: BloodInventoryUpdateManyWithoutBankNestedInput
    bloodRequests?: BloodRequestUpdateManyWithoutHospitalNestedInput
    inventoryHistory?: InventoryHistoryUpdateManyWithoutBankNestedInput
    donationAppointments?: DonationAppointmentUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bloodInventory?: BloodInventoryUncheckedUpdateManyWithoutBankNestedInput
    bloodRequests?: BloodRequestUncheckedUpdateManyWithoutHospitalNestedInput
    inventoryHistory?: InventoryHistoryUncheckedUpdateManyWithoutBankNestedInput
    donationAppointments?: DonationAppointmentUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type BloodRequestUpsertWithWhereUniqueWithoutRequesterInput = {
    where: BloodRequestWhereUniqueInput
    update: XOR<BloodRequestUpdateWithoutRequesterInput, BloodRequestUncheckedUpdateWithoutRequesterInput>
    create: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput>
  }

  export type BloodRequestUpdateWithWhereUniqueWithoutRequesterInput = {
    where: BloodRequestWhereUniqueInput
    data: XOR<BloodRequestUpdateWithoutRequesterInput, BloodRequestUncheckedUpdateWithoutRequesterInput>
  }

  export type BloodRequestUpdateManyWithWhereWithoutRequesterInput = {
    where: BloodRequestScalarWhereInput
    data: XOR<BloodRequestUpdateManyMutationInput, BloodRequestUncheckedUpdateManyWithoutRequesterInput>
  }

  export type InventoryHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: InventoryHistoryWhereUniqueInput
    update: XOR<InventoryHistoryUpdateWithoutUserInput, InventoryHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<InventoryHistoryCreateWithoutUserInput, InventoryHistoryUncheckedCreateWithoutUserInput>
  }

  export type InventoryHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: InventoryHistoryWhereUniqueInput
    data: XOR<InventoryHistoryUpdateWithoutUserInput, InventoryHistoryUncheckedUpdateWithoutUserInput>
  }

  export type InventoryHistoryUpdateManyWithWhereWithoutUserInput = {
    where: InventoryHistoryScalarWhereInput
    data: XOR<InventoryHistoryUpdateManyMutationInput, InventoryHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type DonationAppointmentUpsertWithWhereUniqueWithoutDonorInput = {
    where: DonationAppointmentWhereUniqueInput
    update: XOR<DonationAppointmentUpdateWithoutDonorInput, DonationAppointmentUncheckedUpdateWithoutDonorInput>
    create: XOR<DonationAppointmentCreateWithoutDonorInput, DonationAppointmentUncheckedCreateWithoutDonorInput>
  }

  export type DonationAppointmentUpdateWithWhereUniqueWithoutDonorInput = {
    where: DonationAppointmentWhereUniqueInput
    data: XOR<DonationAppointmentUpdateWithoutDonorInput, DonationAppointmentUncheckedUpdateWithoutDonorInput>
  }

  export type DonationAppointmentUpdateManyWithWhereWithoutDonorInput = {
    where: DonationAppointmentScalarWhereInput
    data: XOR<DonationAppointmentUpdateManyMutationInput, DonationAppointmentUncheckedUpdateManyWithoutDonorInput>
  }

  export type HospitalCreateWithoutBloodInventoryInput = {
    name: string
    city: string
    latitude?: number | null
    longitude?: number | null
    users?: UserCreateNestedManyWithoutHospitalInput
    bloodRequests?: BloodRequestCreateNestedManyWithoutHospitalInput
    inventoryHistory?: InventoryHistoryCreateNestedManyWithoutBankInput
    donationAppointments?: DonationAppointmentCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateWithoutBloodInventoryInput = {
    id?: number
    name: string
    city: string
    latitude?: number | null
    longitude?: number | null
    users?: UserUncheckedCreateNestedManyWithoutHospitalInput
    bloodRequests?: BloodRequestUncheckedCreateNestedManyWithoutHospitalInput
    inventoryHistory?: InventoryHistoryUncheckedCreateNestedManyWithoutBankInput
    donationAppointments?: DonationAppointmentUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalCreateOrConnectWithoutBloodInventoryInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutBloodInventoryInput, HospitalUncheckedCreateWithoutBloodInventoryInput>
  }

  export type HospitalUpsertWithoutBloodInventoryInput = {
    update: XOR<HospitalUpdateWithoutBloodInventoryInput, HospitalUncheckedUpdateWithoutBloodInventoryInput>
    create: XOR<HospitalCreateWithoutBloodInventoryInput, HospitalUncheckedCreateWithoutBloodInventoryInput>
    where?: HospitalWhereInput
  }

  export type HospitalUpdateToOneWithWhereWithoutBloodInventoryInput = {
    where?: HospitalWhereInput
    data: XOR<HospitalUpdateWithoutBloodInventoryInput, HospitalUncheckedUpdateWithoutBloodInventoryInput>
  }

  export type HospitalUpdateWithoutBloodInventoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    users?: UserUpdateManyWithoutHospitalNestedInput
    bloodRequests?: BloodRequestUpdateManyWithoutHospitalNestedInput
    inventoryHistory?: InventoryHistoryUpdateManyWithoutBankNestedInput
    donationAppointments?: DonationAppointmentUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateWithoutBloodInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    users?: UserUncheckedUpdateManyWithoutHospitalNestedInput
    bloodRequests?: BloodRequestUncheckedUpdateManyWithoutHospitalNestedInput
    inventoryHistory?: InventoryHistoryUncheckedUpdateManyWithoutBankNestedInput
    donationAppointments?: DonationAppointmentUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type UserCreateWithoutBloodRequestsInput = {
    email: string
    passwordHash: string
    name: string
    role?: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    hospital?: HospitalCreateNestedOneWithoutUsersInput
    inventoryHistory?: InventoryHistoryCreateNestedManyWithoutUserInput
    donationAppointments?: DonationAppointmentCreateNestedManyWithoutDonorInput
  }

  export type UserUncheckedCreateWithoutBloodRequestsInput = {
    id?: number
    email: string
    passwordHash: string
    name: string
    role?: string
    hospitalId?: number | null
    bloodGroup?: string | null
    aadharNumber?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    inventoryHistory?: InventoryHistoryUncheckedCreateNestedManyWithoutUserInput
    donationAppointments?: DonationAppointmentUncheckedCreateNestedManyWithoutDonorInput
  }

  export type UserCreateOrConnectWithoutBloodRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBloodRequestsInput, UserUncheckedCreateWithoutBloodRequestsInput>
  }

  export type HospitalCreateWithoutBloodRequestsInput = {
    name: string
    city: string
    latitude?: number | null
    longitude?: number | null
    users?: UserCreateNestedManyWithoutHospitalInput
    bloodInventory?: BloodInventoryCreateNestedManyWithoutBankInput
    inventoryHistory?: InventoryHistoryCreateNestedManyWithoutBankInput
    donationAppointments?: DonationAppointmentCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateWithoutBloodRequestsInput = {
    id?: number
    name: string
    city: string
    latitude?: number | null
    longitude?: number | null
    users?: UserUncheckedCreateNestedManyWithoutHospitalInput
    bloodInventory?: BloodInventoryUncheckedCreateNestedManyWithoutBankInput
    inventoryHistory?: InventoryHistoryUncheckedCreateNestedManyWithoutBankInput
    donationAppointments?: DonationAppointmentUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalCreateOrConnectWithoutBloodRequestsInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutBloodRequestsInput, HospitalUncheckedCreateWithoutBloodRequestsInput>
  }

  export type UserUpsertWithoutBloodRequestsInput = {
    update: XOR<UserUpdateWithoutBloodRequestsInput, UserUncheckedUpdateWithoutBloodRequestsInput>
    create: XOR<UserCreateWithoutBloodRequestsInput, UserUncheckedCreateWithoutBloodRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBloodRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBloodRequestsInput, UserUncheckedUpdateWithoutBloodRequestsInput>
  }

  export type UserUpdateWithoutBloodRequestsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneWithoutUsersNestedInput
    inventoryHistory?: InventoryHistoryUpdateManyWithoutUserNestedInput
    donationAppointments?: DonationAppointmentUpdateManyWithoutDonorNestedInput
  }

  export type UserUncheckedUpdateWithoutBloodRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    hospitalId?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryHistory?: InventoryHistoryUncheckedUpdateManyWithoutUserNestedInput
    donationAppointments?: DonationAppointmentUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type HospitalUpsertWithoutBloodRequestsInput = {
    update: XOR<HospitalUpdateWithoutBloodRequestsInput, HospitalUncheckedUpdateWithoutBloodRequestsInput>
    create: XOR<HospitalCreateWithoutBloodRequestsInput, HospitalUncheckedCreateWithoutBloodRequestsInput>
    where?: HospitalWhereInput
  }

  export type HospitalUpdateToOneWithWhereWithoutBloodRequestsInput = {
    where?: HospitalWhereInput
    data: XOR<HospitalUpdateWithoutBloodRequestsInput, HospitalUncheckedUpdateWithoutBloodRequestsInput>
  }

  export type HospitalUpdateWithoutBloodRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    users?: UserUpdateManyWithoutHospitalNestedInput
    bloodInventory?: BloodInventoryUpdateManyWithoutBankNestedInput
    inventoryHistory?: InventoryHistoryUpdateManyWithoutBankNestedInput
    donationAppointments?: DonationAppointmentUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateWithoutBloodRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    users?: UserUncheckedUpdateManyWithoutHospitalNestedInput
    bloodInventory?: BloodInventoryUncheckedUpdateManyWithoutBankNestedInput
    inventoryHistory?: InventoryHistoryUncheckedUpdateManyWithoutBankNestedInput
    donationAppointments?: DonationAppointmentUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type UserCreateWithoutInventoryHistoryInput = {
    email: string
    passwordHash: string
    name: string
    role?: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    hospital?: HospitalCreateNestedOneWithoutUsersInput
    bloodRequests?: BloodRequestCreateNestedManyWithoutRequesterInput
    donationAppointments?: DonationAppointmentCreateNestedManyWithoutDonorInput
  }

  export type UserUncheckedCreateWithoutInventoryHistoryInput = {
    id?: number
    email: string
    passwordHash: string
    name: string
    role?: string
    hospitalId?: number | null
    bloodGroup?: string | null
    aadharNumber?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    bloodRequests?: BloodRequestUncheckedCreateNestedManyWithoutRequesterInput
    donationAppointments?: DonationAppointmentUncheckedCreateNestedManyWithoutDonorInput
  }

  export type UserCreateOrConnectWithoutInventoryHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInventoryHistoryInput, UserUncheckedCreateWithoutInventoryHistoryInput>
  }

  export type HospitalCreateWithoutInventoryHistoryInput = {
    name: string
    city: string
    latitude?: number | null
    longitude?: number | null
    users?: UserCreateNestedManyWithoutHospitalInput
    bloodInventory?: BloodInventoryCreateNestedManyWithoutBankInput
    bloodRequests?: BloodRequestCreateNestedManyWithoutHospitalInput
    donationAppointments?: DonationAppointmentCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateWithoutInventoryHistoryInput = {
    id?: number
    name: string
    city: string
    latitude?: number | null
    longitude?: number | null
    users?: UserUncheckedCreateNestedManyWithoutHospitalInput
    bloodInventory?: BloodInventoryUncheckedCreateNestedManyWithoutBankInput
    bloodRequests?: BloodRequestUncheckedCreateNestedManyWithoutHospitalInput
    donationAppointments?: DonationAppointmentUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalCreateOrConnectWithoutInventoryHistoryInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutInventoryHistoryInput, HospitalUncheckedCreateWithoutInventoryHistoryInput>
  }

  export type UserUpsertWithoutInventoryHistoryInput = {
    update: XOR<UserUpdateWithoutInventoryHistoryInput, UserUncheckedUpdateWithoutInventoryHistoryInput>
    create: XOR<UserCreateWithoutInventoryHistoryInput, UserUncheckedCreateWithoutInventoryHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInventoryHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInventoryHistoryInput, UserUncheckedUpdateWithoutInventoryHistoryInput>
  }

  export type UserUpdateWithoutInventoryHistoryInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneWithoutUsersNestedInput
    bloodRequests?: BloodRequestUpdateManyWithoutRequesterNestedInput
    donationAppointments?: DonationAppointmentUpdateManyWithoutDonorNestedInput
  }

  export type UserUncheckedUpdateWithoutInventoryHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    hospitalId?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodRequests?: BloodRequestUncheckedUpdateManyWithoutRequesterNestedInput
    donationAppointments?: DonationAppointmentUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type HospitalUpsertWithoutInventoryHistoryInput = {
    update: XOR<HospitalUpdateWithoutInventoryHistoryInput, HospitalUncheckedUpdateWithoutInventoryHistoryInput>
    create: XOR<HospitalCreateWithoutInventoryHistoryInput, HospitalUncheckedCreateWithoutInventoryHistoryInput>
    where?: HospitalWhereInput
  }

  export type HospitalUpdateToOneWithWhereWithoutInventoryHistoryInput = {
    where?: HospitalWhereInput
    data: XOR<HospitalUpdateWithoutInventoryHistoryInput, HospitalUncheckedUpdateWithoutInventoryHistoryInput>
  }

  export type HospitalUpdateWithoutInventoryHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    users?: UserUpdateManyWithoutHospitalNestedInput
    bloodInventory?: BloodInventoryUpdateManyWithoutBankNestedInput
    bloodRequests?: BloodRequestUpdateManyWithoutHospitalNestedInput
    donationAppointments?: DonationAppointmentUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateWithoutInventoryHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    users?: UserUncheckedUpdateManyWithoutHospitalNestedInput
    bloodInventory?: BloodInventoryUncheckedUpdateManyWithoutBankNestedInput
    bloodRequests?: BloodRequestUncheckedUpdateManyWithoutHospitalNestedInput
    donationAppointments?: DonationAppointmentUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type UserCreateWithoutDonationAppointmentsInput = {
    email: string
    passwordHash: string
    name: string
    role?: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    hospital?: HospitalCreateNestedOneWithoutUsersInput
    bloodRequests?: BloodRequestCreateNestedManyWithoutRequesterInput
    inventoryHistory?: InventoryHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDonationAppointmentsInput = {
    id?: number
    email: string
    passwordHash: string
    name: string
    role?: string
    hospitalId?: number | null
    bloodGroup?: string | null
    aadharNumber?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    bloodRequests?: BloodRequestUncheckedCreateNestedManyWithoutRequesterInput
    inventoryHistory?: InventoryHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDonationAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDonationAppointmentsInput, UserUncheckedCreateWithoutDonationAppointmentsInput>
  }

  export type HospitalCreateWithoutDonationAppointmentsInput = {
    name: string
    city: string
    latitude?: number | null
    longitude?: number | null
    users?: UserCreateNestedManyWithoutHospitalInput
    bloodInventory?: BloodInventoryCreateNestedManyWithoutBankInput
    bloodRequests?: BloodRequestCreateNestedManyWithoutHospitalInput
    inventoryHistory?: InventoryHistoryCreateNestedManyWithoutBankInput
  }

  export type HospitalUncheckedCreateWithoutDonationAppointmentsInput = {
    id?: number
    name: string
    city: string
    latitude?: number | null
    longitude?: number | null
    users?: UserUncheckedCreateNestedManyWithoutHospitalInput
    bloodInventory?: BloodInventoryUncheckedCreateNestedManyWithoutBankInput
    bloodRequests?: BloodRequestUncheckedCreateNestedManyWithoutHospitalInput
    inventoryHistory?: InventoryHistoryUncheckedCreateNestedManyWithoutBankInput
  }

  export type HospitalCreateOrConnectWithoutDonationAppointmentsInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutDonationAppointmentsInput, HospitalUncheckedCreateWithoutDonationAppointmentsInput>
  }

  export type UserUpsertWithoutDonationAppointmentsInput = {
    update: XOR<UserUpdateWithoutDonationAppointmentsInput, UserUncheckedUpdateWithoutDonationAppointmentsInput>
    create: XOR<UserCreateWithoutDonationAppointmentsInput, UserUncheckedCreateWithoutDonationAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDonationAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDonationAppointmentsInput, UserUncheckedUpdateWithoutDonationAppointmentsInput>
  }

  export type UserUpdateWithoutDonationAppointmentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneWithoutUsersNestedInput
    bloodRequests?: BloodRequestUpdateManyWithoutRequesterNestedInput
    inventoryHistory?: InventoryHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDonationAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    hospitalId?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodRequests?: BloodRequestUncheckedUpdateManyWithoutRequesterNestedInput
    inventoryHistory?: InventoryHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HospitalUpsertWithoutDonationAppointmentsInput = {
    update: XOR<HospitalUpdateWithoutDonationAppointmentsInput, HospitalUncheckedUpdateWithoutDonationAppointmentsInput>
    create: XOR<HospitalCreateWithoutDonationAppointmentsInput, HospitalUncheckedCreateWithoutDonationAppointmentsInput>
    where?: HospitalWhereInput
  }

  export type HospitalUpdateToOneWithWhereWithoutDonationAppointmentsInput = {
    where?: HospitalWhereInput
    data: XOR<HospitalUpdateWithoutDonationAppointmentsInput, HospitalUncheckedUpdateWithoutDonationAppointmentsInput>
  }

  export type HospitalUpdateWithoutDonationAppointmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    users?: UserUpdateManyWithoutHospitalNestedInput
    bloodInventory?: BloodInventoryUpdateManyWithoutBankNestedInput
    bloodRequests?: BloodRequestUpdateManyWithoutHospitalNestedInput
    inventoryHistory?: InventoryHistoryUpdateManyWithoutBankNestedInput
  }

  export type HospitalUncheckedUpdateWithoutDonationAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    users?: UserUncheckedUpdateManyWithoutHospitalNestedInput
    bloodInventory?: BloodInventoryUncheckedUpdateManyWithoutBankNestedInput
    bloodRequests?: BloodRequestUncheckedUpdateManyWithoutHospitalNestedInput
    inventoryHistory?: InventoryHistoryUncheckedUpdateManyWithoutBankNestedInput
  }

  export type UserCreateManyHospitalInput = {
    id?: number
    email: string
    passwordHash: string
    name: string
    role?: string
    bloodGroup?: string | null
    aadharNumber?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
  }

  export type BloodInventoryCreateManyBankInput = {
    id?: number
    bloodGroup: string
    component: string
    units: number
    expiresOn: Date | string
    createdAt?: Date | string
  }

  export type BloodRequestCreateManyHospitalInput = {
    id?: number
    requesterId?: number | null
    bloodGroup: string
    units: number
    urgency?: string
    status?: string
    token?: string | null
    createdAt?: Date | string
  }

  export type InventoryHistoryCreateManyBankInput = {
    id?: number
    userId?: number | null
    action: string
    bloodGroup: string
    component: string
    units: number
    createdAt?: Date | string
  }

  export type DonationAppointmentCreateManyHospitalInput = {
    id?: number
    donorId: number
    donationType: string
    status?: string
    scheduledDate?: Date | string | null
    createdAt?: Date | string
  }

  export type UserUpdateWithoutHospitalInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodRequests?: BloodRequestUpdateManyWithoutRequesterNestedInput
    inventoryHistory?: InventoryHistoryUpdateManyWithoutUserNestedInput
    donationAppointments?: DonationAppointmentUpdateManyWithoutDonorNestedInput
  }

  export type UserUncheckedUpdateWithoutHospitalInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodRequests?: BloodRequestUncheckedUpdateManyWithoutRequesterNestedInput
    inventoryHistory?: InventoryHistoryUncheckedUpdateManyWithoutUserNestedInput
    donationAppointments?: DonationAppointmentUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutHospitalInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodInventoryUpdateWithoutBankInput = {
    bloodGroup?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    expiresOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodInventoryUncheckedUpdateWithoutBankInput = {
    id?: IntFieldUpdateOperationsInput | number
    bloodGroup?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    expiresOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodInventoryUncheckedUpdateManyWithoutBankInput = {
    id?: IntFieldUpdateOperationsInput | number
    bloodGroup?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    expiresOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestUpdateWithoutHospitalInput = {
    bloodGroup?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    urgency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneWithoutBloodRequestsNestedInput
  }

  export type BloodRequestUncheckedUpdateWithoutHospitalInput = {
    id?: IntFieldUpdateOperationsInput | number
    requesterId?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGroup?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    urgency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestUncheckedUpdateManyWithoutHospitalInput = {
    id?: IntFieldUpdateOperationsInput | number
    requesterId?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGroup?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    urgency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryHistoryUpdateWithoutBankInput = {
    action?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutInventoryHistoryNestedInput
  }

  export type InventoryHistoryUncheckedUpdateWithoutBankInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryHistoryUncheckedUpdateManyWithoutBankInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationAppointmentUpdateWithoutHospitalInput = {
    donationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: UserUpdateOneRequiredWithoutDonationAppointmentsNestedInput
  }

  export type DonationAppointmentUncheckedUpdateWithoutHospitalInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorId?: IntFieldUpdateOperationsInput | number
    donationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationAppointmentUncheckedUpdateManyWithoutHospitalInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorId?: IntFieldUpdateOperationsInput | number
    donationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestCreateManyRequesterInput = {
    id?: number
    hospitalId: number
    bloodGroup: string
    units: number
    urgency?: string
    status?: string
    token?: string | null
    createdAt?: Date | string
  }

  export type InventoryHistoryCreateManyUserInput = {
    id?: number
    action: string
    bloodGroup: string
    component: string
    units: number
    bankId: number
    createdAt?: Date | string
  }

  export type DonationAppointmentCreateManyDonorInput = {
    id?: number
    hospitalId?: number | null
    donationType: string
    status?: string
    scheduledDate?: Date | string | null
    createdAt?: Date | string
  }

  export type BloodRequestUpdateWithoutRequesterInput = {
    bloodGroup?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    urgency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneRequiredWithoutBloodRequestsNestedInput
  }

  export type BloodRequestUncheckedUpdateWithoutRequesterInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospitalId?: IntFieldUpdateOperationsInput | number
    bloodGroup?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    urgency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestUncheckedUpdateManyWithoutRequesterInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospitalId?: IntFieldUpdateOperationsInput | number
    bloodGroup?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    urgency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryHistoryUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: HospitalUpdateOneRequiredWithoutInventoryHistoryNestedInput
  }

  export type InventoryHistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    bankId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    bankId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationAppointmentUpdateWithoutDonorInput = {
    donationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneWithoutDonationAppointmentsNestedInput
  }

  export type DonationAppointmentUncheckedUpdateWithoutDonorInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospitalId?: NullableIntFieldUpdateOperationsInput | number | null
    donationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationAppointmentUncheckedUpdateManyWithoutDonorInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospitalId?: NullableIntFieldUpdateOperationsInput | number | null
    donationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}