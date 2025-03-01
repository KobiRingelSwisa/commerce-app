function Navbar() {
  return (
    <header className="flex">
      <div className="flex w-1/3">
        <h2>Kobi's Mall</h2>
      </div>
      <div className="flex w-2/3 justify-end gap-6">
        <p>My Cart</p>
        <p>Liked Items</p>
      </div>
    </header>
  );
}

export default Navbar;
