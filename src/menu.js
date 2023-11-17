function menuOptions() {
    const containerMenu = document.createElement('div');
    containerMenu.style.cssText = 'display: flex; flex-wrap: wrap; background-image: linear-gradient(60deg, pink, white); height: 100%; width: 100%; align-content: flex-start; justify-content: space-around; padding: 40px 0 0 0;';
    containerMenu.innerHTML = 
    `
    <div class="menu-card">
        <img src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div class="menu-dish">
            Spaghetti
        </div>
    </div>

    <div class="menu-card">
        <img src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div class="menu-dish">
            Spaghetti
        </div>
    </div>

    <div class="menu-card">
        <img src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div class="menu-dish">
            Spaghetti
        </div>
    </div>

    <div class="menu-card">
        <img src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div class="menu-dish">
            Spaghetti
        </div>
    </div>

    <div class="menu-card">
        <img src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div class="menu-dish">
            Spaghetti
        </div>
    </div>

    <div class="menu-card">
        <img src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div class="menu-dish">
            Spaghetti
        </div>
    </div>

    <div class="menu-card">
        <img src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div class="menu-dish">
            Spaghetti
        </div>
    </div>

    <div class="menu-card">
        <img src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div class="menu-dish">
            Spaghetti
        </div>
    </div>
    `;
    return containerMenu;
}

export default menuOptions;