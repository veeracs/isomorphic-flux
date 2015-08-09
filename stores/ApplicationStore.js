//	keeps track of which page is currently displayed

var createStore = require("fluxible/addons/createStore");

var routes = require("../configs/routes");

var ApplicationStore = createStore({
    storeName: "ApplicationStore",
    handlers: {
        "CHANGE_ROUTE_SUCCESS": "_handleNavigate"
    },
    initialize: function(dispatcher) {
        this.currentPageName = null;
        this.currentPage = null;
        this.currentRoute = null;
        this.pages = routes;
    },
    /**
     * Handler called when 'CHANGE_ROUTE_SUCCESS' action is dispatched,
     * takes the payload (route object) and updates the store properties accordingly
     * Store doesn't render anything but keeps track of which page should be rendered
     * @param {Object} payload - Action payload
     * @returns {undefined} undefined
     */
    _handleNavigate: function(route) {
        var pageName = route.name;
        var page = this.pages[pageName];
        if (pageName === this.getCurrentPageName()) {
            return;
        }
        //	update store properties
        this.currentPageName = pageName;
        this.currentPage = page;
        this.currentRoute = route;
        this.emitChange();
    },
    getCurrentPageName: function() {
        return this.currentPageName;
    },
    getState: function() {
        return {
            currentPageName: this.currentPageName,
            currentPage: this.currentPage,
            pages: this.pages,
            route: this.currentRoute
        };
    }
});

module.exports = ApplicationStore;