/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class VisitValidator implements Hml.VisitValidator {
    static init(opts?: Hml.VisitValidatorOptions): VisitValidator;
    private constructor();
    validate(context: Hml.Context): Promise<boolean>;
}