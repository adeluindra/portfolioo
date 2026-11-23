
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "StockGuard — Case Study | Moh Syafiq Ade Luwindra",
  description:
    "Explore StockGuard, an inventory reservation and order management system built with Go, PostgreSQL, React, and TypeScript.",
};

const githubUrl = "https://github.com/adeluindra/stockguard";

const technologies = [
  "Go",
  "net/http",
  "PostgreSQL 17",
  "pgx",
  "golang-migrate",
  "React",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "TanStack Router",
  "Docker Compose",
  "Playwright",
  "GitHub Actions",
] as const;

const features = [
  {
    number: "01",
    title: "Authentication & Roles",
    description:
      "Admin and Staff roles with HTTP-only session cookies, CSRF protection, origin checks, login rate limiting, and forced password change for temporary credentials.",
  },
  {
    number: "02",
    title: "Product Management",
    description:
      "Admins create, update, and deactivate products with SKU and low-stock thresholds. Inactive products stay stored for historical consistency.",
  },
  {
    number: "03",
    title: "Stock Adjustments",
    description:
      "Inventory changes require a reason and an Idempotency-Key, cannot consume reserved stock, and always produce an audit movement.",
  },
  {
    number: "04",
    title: "Orders & Reservations",
    description:
      "Creating an order reserves every item atomically — no partial reservations. Admins can then fulfill or cancel the order.",
  },
  {
    number: "05",
    title: "Dashboard & Reporting",
    description:
      "Inventory and order KPIs, low-stock reporting, and a paginated activity feed built from the inventory audit trail.",
  },
  {
    number: "06",
    title: "Staff Administration",
    description:
      "Admins create staff accounts, reset passwords, and deactivate users. Staff can only see orders they created.",
  },
] as const;

const screenshots = [
  {
    number: "01",
    title: "Product Catalog",
    label: "Products",
    description:
      "Review every product with its SKU, on-hand, reserved, and available quantities, low-stock threshold, and status. Admins can add, edit, or deactivate products.",
    image: "/images/projects/stockguard-products.png",
    alt: "StockGuard Product Catalog table listing products with on-hand, reserved, available, threshold, and status columns",
  },
  {
    number: "02",
    title: "Inventory Control",
    label: "Inventory",
    description:
      "Select a product to inspect its stock balance and record an inventory adjustment with a reason — every change is written to the audit trail.",
    image: "/images/projects/stockguard-inventory.png",
    alt: "StockGuard Inventory Control page with product cards showing SKU and available stock",
  },
  {
    number: "03",
    title: "Order Management",
    label: "Orders",
    description:
      "Create orders that reserve stock, filter by status, and fulfill or cancel reserved orders. Staff only see the orders they created.",
    image: "/images/projects/stockguard-orders.png",
    alt: "StockGuard Order Management list showing reserved, fulfilled, and cancelled orders with creator and timestamp",
  },
  {
    number: "04",
    title: "Team Management",
    label: "Team",
    description:
      "Admin-only page for creating Staff accounts. The backend generates a random temporary password, and admins can reset or deactivate accounts.",
    image: "/images/projects/stockguard-team.png",
    alt: "StockGuard Team Management page with a form to create staff accounts and a staff list",
  },
] as const;

const invariants = [
  "available = on_hand − reserved",
  "0 ≤ reserved ≤ on_hand",
  "Creating an order reserves every item atomically",
  "Fulfillment decreases on_hand and reserved",
  "Cancellation decreases reserved only",
  "Terminal order actions cannot double-apply changes",
  "Every committed stock mutation has an audit movement",
] as const;

const orderStates = [
  {
    state: "reserved",
    description: "Stock is held for the order",
    tone: "border-amber-300/40 bg-amber-400/10 text-amber-200",
  },
  {
    state: "fulfilled",
    description: "on_hand and reserved decrease",
    tone: "border-emerald-300/40 bg-emerald-400/10 text-emerald-200",
  },
  {
    state: "cancelled",
    description: "Only reserved decreases",
    tone: "border-rose-300/40 bg-rose-400/10 text-rose-200",
  },
] as const;

const architecture = [
  {
    title: "Frontend",
    technology: "React + TypeScript SPA",
    description:
      "Vite, Tailwind CSS, and TanStack Router for authentication, dashboard, products, inventory, orders, and staff pages.",
  },
  {
    title: "Backend",
    technology: "Go net/http API",
    description:
      "Modular domains (auth, products, inventory, orders, dashboard) with session middleware, RBAC, validation, and structured errors.",
  },
  {
    title: "Database",
    technology: "PostgreSQL 17",
    description:
      "Versioned migrations, relational constraints, and transactions that protect every inventory-changing workflow.",
  },
] as const;

const endpoints = [
  ["POST", "/api/v1/auth/login", "Sign in with login CSRF token"],
  ["GET", "/api/v1/products", "List products (paginated)"],
  ["POST", "/api/v1/products", "Create a product (Admin)"],
  [
    "POST",
    "/api/v1/products/{id}/inventory/adjustments",
    "Idempotent stock adjustment (Admin)",
  ],
  ["POST", "/api/v1/orders", "Create an order and reserve stock"],
  ["POST", "/api/v1/orders/{id}/fulfill", "Fulfill a reserved order (Admin)"],
  ["POST", "/api/v1/orders/{id}/cancel", "Cancel a reserved order (Admin)"],
  ["GET", "/api/v1/dashboard/summary", "Inventory and order KPIs (Admin)"],
] as const;

const practices = [
  {
    title: "Transactional Integrity",
    description:
      "All inventory-changing workflows run inside PostgreSQL transactions, backed by database constraints that keep reserved stock within on-hand quantity.",
  },
  {
    title: "Idempotent Writes",
    description:
      "Order creation and stock adjustments require an Idempotency-Key. Replaying the same request returns the original result; reusing a key with a different payload returns 409.",
  },
  {
    title: "Security by Default",
    description:
      "HTTP-only session cookies, CSRF tokens, strict Origin checks, role-based access, and ownership-scoped order queries that hide other users' data.",
  },
  {
    title: "Audit Trail",
    description:
      "Every committed quantity change is recorded as an inventory movement, so stock history can be reviewed and explained.",
  },
  {
    title: "Automated Testing",
    description:
      "Go unit and integration tests, PostgreSQL constraint tests, concurrency regression tests, and Playwright end-to-end tests.",
  },
  {
    title: "Continuous Integration",
    description:
      "GitHub Actions run Go checks, PostgreSQL integration tests with disposable credentials, and frontend lint and build.",
  },
] as const;

export default function StockGuardPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* HERO */}
        <section className="section-space bg-background">
          <div className="container-page">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline focus-ring"
            >
              ← Back to projects
            </Link>

            <p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Personal Project / Full-Stack Engineering
            </p>

            <h1 className="mt-4 text-[clamp(2.8rem,6vw,4.5rem)] font-bold leading-tight tracking-[-0.055em] text-foreground">
              StockGuard
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              An inventory reservation and order
              management system that keeps stock
              quantities correct under concurrent
              orders, retries, and role-based access.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-line bg-white px-3 py-2 text-xs font-semibold text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                View GitHub Repository
                <span aria-hidden="true">↗</span>
              </a>

              <span className="text-sm text-muted">
                Local application · No public demo
              </span>
            </div>

            {/* MAIN SCREENSHOT */}
            <figure className="mt-12 overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-[1024/453]">
                <Image
                  src="/images/projects/stockguard-dashboard.png"
                  alt="StockGuard Operational Dashboard showing active products, total on hand, reserved stock, available stock, low stock, and inactive products"
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, 1120px"
                  className="object-contain"
                />
              </div>

              <figcaption className="border-t border-line bg-slate-50 px-6 py-4 text-sm text-muted">
                Operational Dashboard — actual screenshot
                from the local StockGuard application.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* PROBLEM & SOLUTION */}
        <section
          aria-labelledby="overview-heading"
          className="section-space bg-white"
        >
          <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Project Overview
              </p>

              <h2
                id="overview-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Keeping stock numbers trustworthy
              </h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  The Problem
                </h3>

                <p className="mt-3 leading-8 text-muted">
                  In inventory systems, simultaneous
                  orders, network retries, and partial
                  updates can easily cause overselling,
                  duplicated stock changes, or quantities
                  that no longer match reality.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground">
                  The Solution
                </h3>

                <p className="mt-3 leading-8 text-muted">
                  StockGuard separates on-hand and reserved
                  stock for one store and one warehouse.
                  Orders reserve items atomically, fulfillment
                  and cancellation follow strict state rules,
                  and every committed change is written to an
                  audit trail.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground">
                  My Focus
                </h3>

                <p className="mt-3 leading-8 text-muted">
                  Design a backend where correctness is
                  enforced by transactions, database
                  constraints, and idempotency — then verify
                  it with integration, concurrency, and
                  end-to-end tests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT WALKTHROUGH */}
        <section
          aria-labelledby="walkthrough-heading"
          className="section-space bg-background"
        >
          <div className="container-page">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Product Walkthrough
            </p>

            <h2
              id="walkthrough-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              The application in action
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-muted">
              Four workspace pages captured directly
              from the running application, signed in
              as Admin.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {screenshots.map((item) => (
                <article
                  key={item.number}
                  className="group flex flex-col overflow-hidden rounded-[22px] border border-line bg-white transition-[border-color,box-shadow] duration-200 hover:border-blue-200 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
                >
                  <a
                    href={item.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open full ${item.title} screenshot`}
                    className="relative block aspect-[1024/453] overflow-hidden border-b border-line bg-slate-50 focus-ring"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, 560px"
                      className="object-cover object-left-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent">
                      {item.number} / {item.label}
                    </p>

                    <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {item.description}
                    </p>

                    <a
                      href={item.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex w-fit items-center gap-1 pt-5 text-sm font-semibold text-accent hover:underline focus-ring"
                    >
                      Open full screenshot
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section
          aria-labelledby="features-heading"
          className="section-space bg-white"
        >
          <div className="container-page">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Main Features
            </p>

            <h2
              id="features-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              What the system does
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.number}
                  className="rounded-[20px] border border-line bg-background p-7"
                >
                  <p className="text-sm font-bold text-accent">
                    {feature.number}
                  </p>

                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-8 text-muted">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INVARIANTS */}
        <section
          aria-labelledby="invariants-heading"
          className="section-space bg-background"
        >
          <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Domain Rules
              </p>

              <h2
                id="invariants-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-foreground"
              >
                Inventory invariants
              </h2>

              <p className="mt-4 leading-8 text-muted">
                These rules must hold after every
                request — including concurrent orders
                and retried requests with the same
                idempotency key.
              </p>
            </div>

            <ul className="overflow-hidden rounded-[20px] border border-line bg-white divide-y divide-line">
              {invariants.map((rule) => (
                <li
                  key={rule}
                  className="flex items-start gap-3 px-6 py-4"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 text-sm font-bold text-emerald-600"
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-7 text-foreground">
                    {rule}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="container-page">
            {/* INVENTORY MODEL DIAGRAM */}
            <figure className="mt-12 overflow-hidden rounded-[24px] border border-line bg-[#05091b] shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
              <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                    Inventory Model
                  </p>

                  <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-4">
                    {[
                      ["On hand", "84", "text-white"],
                      ["Reserved", "18", "text-amber-300"],
                      ["Available", "66", "text-emerald-300"],
                    ].map(([label, value, tone]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5"
                      >
                        <p className="text-xs font-medium text-slate-400 sm:text-sm">
                          {label}
                        </p>
                        <p
                          className={`mt-2 text-3xl font-bold sm:text-4xl ${tone}`}
                        >
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-2">
                    <code className="block w-fit rounded-lg bg-white/5 px-3 py-2 text-sm text-slate-200">
                      available = on_hand − reserved
                    </code>
                    <code className="block w-fit rounded-lg bg-white/5 px-3 py-2 text-sm text-slate-200">
                      0 ≤ reserved ≤ on_hand
                    </code>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                    Order Lifecycle
                  </p>

                  <ol className="mt-5 space-y-3">
                    {orderStates.map((item, index) => (
                      <li
                        key={item.state}
                        className="flex items-center gap-4"
                      >
                        <span className="w-6 text-sm font-bold text-slate-500">
                          {index === 0 ? "→" : "↳"}
                        </span>
                        <span
                          className={`min-w-[6.5rem] rounded-lg border px-3 py-1.5 text-center text-sm font-semibold ${item.tone}`}
                        >
                          {item.state}
                        </span>
                        <span className="text-sm text-slate-300">
                          {item.description}
                        </span>
                      </li>
                    ))}
                  </ol>

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    Fulfilled and cancelled are terminal
                    states. Repeating the same action is
                    safe; the opposite action returns 409.
                  </p>
                </div>
              </div>

              <figcaption className="border-t border-slate-800 bg-[#0f172a] px-6 py-4 text-sm text-slate-300">
                Diagram of StockGuard&apos;s inventory
                rules and order lifecycle, using the totals
                from the dashboard screenshot above.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* SYSTEM ARCHITECTURE */}
        <section
          aria-labelledby="architecture-heading"
          className="section-space bg-white"
        >
          <div className="container-page">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Engineering / System Design
            </p>

            <h2
              id="architecture-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              From frontend to database
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-muted">
              A monorepo with a React single-page
              application, a modular Go API, and a
              PostgreSQL database managed with versioned
              migrations.
            </p>

            <div className="mt-9 rounded-[24px] bg-[#0b1425] p-5 sm:p-8">
              <div className="grid gap-4 md:grid-cols-3">
                {architecture.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/15 bg-white/5 p-6"
                  >
                    <p className="text-sm font-bold text-emerald-300">
                      0{index + 1}
                    </p>

                    <h3 className="mt-4 text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-blue-200">
                      {item.technology}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>

              <p className="mt-7 text-center text-xs font-medium text-slate-300">
                React SPA → Go REST API (/api/v1) → PostgreSQL 17
              </p>
            </div>
          </div>
        </section>

        {/* API ENDPOINTS */}
        <section
          aria-labelledby="api-heading"
          className="section-space bg-background"
        >
          <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Backend Development
              </p>

              <h2
                id="api-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-foreground"
              >
                REST API Design
              </h2>

              <p className="mt-4 leading-8 text-muted">
                Versioned JSON endpoints with consistent
                response envelopes, pagination, and
                structured errors that include a request
                ID for tracing.
              </p>
            </div>

            <div className="overflow-hidden rounded-[20px] border border-line bg-white">
              <div className="border-b border-line bg-slate-50 px-6 py-4">
                <h3 className="text-sm font-semibold text-foreground">
                  Selected API Endpoints
                </h3>
              </div>

              <ul className="divide-y divide-line">
                {endpoints.map(([method, path, description]) => (
                  <li
                    key={`${method}-${path}`}
                    className="flex flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:gap-4"
                  >
                    <span
                      className={`w-fit rounded-md px-2 py-1 text-xs font-bold ${
                        method === "GET"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {method}
                    </span>

                    <div className="min-w-0">
                      <code className="break-all text-sm font-semibold text-foreground">
                        {path}
                      </code>

                      <p className="mt-1 text-xs text-muted">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ENGINEERING PRACTICES */}
        <section
          aria-labelledby="engineering-heading"
          className="section-space bg-white"
        >
          <div className="container-page">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Engineering Practices
            </p>

            <h2
              id="engineering-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Built for correctness, not just CRUD
            </h2>

            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {practices.map((practice) => (
                <article
                  key={practice.title}
                  className="rounded-[20px] border border-line bg-background p-7"
                >
                  <h3 className="text-lg font-bold text-foreground">
                    {practice.title}
                  </h3>

                  <p className="mt-3 text-sm leading-8 text-muted">
                    {practice.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STATUS */}
        <section className="section-space bg-background">
          <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Project Status
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
                MVP implemented, verification ongoing
              </h2>
            </div>

            <div>
              <p className="leading-8 text-muted">
                The backend MVP and the React frontend
                are implemented. Backend tests pass
                locally, and the read-only Playwright
                end-to-end suite passes locally. CI
                verification in GitHub Actions and the
                business-flow end-to-end tests on a
                dedicated database are still in progress.
              </p>

              <p className="mt-5 leading-8 text-muted">
                StockGuard currently runs locally and is
                not deployed publicly. A production release
                is planned as a separate milestone after
                reviewing the backend release checklist,
                HTTPS and secure cookies, and database
                exposure and backups.
              </p>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline focus-ring"
              >
                Explore the source code ↗
              </a>
            </div>
          </div>
        </section>

        {/* BACK TO PROJECTS */}
        <section className="border-t border-line bg-white py-12">
          <div className="container-page">
            <Link
              href="/#projects"
              className="text-sm font-semibold text-accent hover:underline focus-ring"
            >
              ← Explore other projects
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
