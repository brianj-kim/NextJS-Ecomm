import { Nav, NavLink } from "@/components/Nav";

export const dynamic = "force-dynamic"; // force to not cache 

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            <Nav>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/products">Product</NavLink>                
                <NavLink href="/orders">My Orders</NavLink>
            </Nav>
            <div className="container my-6">{children}</div>
        </>
    );
}