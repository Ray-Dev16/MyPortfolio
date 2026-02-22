import WelcomeController from './WelcomeController'
import DashboardController from './DashboardController'
import PortfolioController from './PortfolioController'
import Settings from './Settings'
const Controllers = {
    WelcomeController: Object.assign(WelcomeController, WelcomeController),
DashboardController: Object.assign(DashboardController, DashboardController),
PortfolioController: Object.assign(PortfolioController, PortfolioController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers