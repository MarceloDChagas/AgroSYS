import type { Specification } from "./Specification";

// Implementação base abstrata
export abstract class AbstractSpecification<T> implements Specification<T> {
  abstract isSatisfiedBy(item: T): boolean;

  and(other: Specification<T>): Specification<T> {
    return new AndSpecification(this, other);
  }

  or(other: Specification<T>): Specification<T> {
    return new OrSpecification(this, other);
  }

  not(): Specification<T> {
    return new NotSpecification(this);
  }
}

// Operadores lógicos
class AndSpecification<T> extends AbstractSpecification<T> {
  constructor(private left: Specification<T>, private right: Specification<T>) {
    super();
  }

  isSatisfiedBy(item: T): boolean {
    return this.left.isSatisfiedBy(item) && this.right.isSatisfiedBy(item);
  }
}

class OrSpecification<T> extends AbstractSpecification<T> {
  constructor(private left: Specification<T>, private right: Specification<T>) {
    super();
  }

  isSatisfiedBy(item: T): boolean {
    return this.left.isSatisfiedBy(item) || this.right.isSatisfiedBy(item);
  }
}

class NotSpecification<T> extends AbstractSpecification<T> {
  constructor(private specification: Specification<T>) {
    super();
  }

  isSatisfiedBy(item: T): boolean {
    return !this.specification.isSatisfiedBy(item);
  }
}
