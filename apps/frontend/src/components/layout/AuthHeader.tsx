import Link from "next/link";

export function AuthHeader() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">
            AgroGestão
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Link
              href="/register"
              className="text-gray-600 hover:text-gray-900"
            >
              Registrar
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
