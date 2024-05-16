function log<
	Type,
	Context extends ClassMethodDecoratorContext | ClassFieldDecoratorContext,
	ReturnType
>(message: Type): (_: unknown, context: Context) => ReturnType {
	//@ts-ignore
	return (_, context) => {
		if (context.kind === "method") {
			return () => message;
		}

		return () => () => message;
	};
}

export class Example {
	@log("test")
	public doSomething = () => {
		console.log("test");
	};
}
