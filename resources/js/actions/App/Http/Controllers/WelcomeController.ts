import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\WelcomeController::__invoke
 * @see app/Http/Controllers/WelcomeController.php:23
 * @route '/'
 */
const WelcomeController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: WelcomeController.url(options),
    method: 'get',
})

WelcomeController.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WelcomeController::__invoke
 * @see app/Http/Controllers/WelcomeController.php:23
 * @route '/'
 */
WelcomeController.url = (options?: RouteQueryOptions) => {
    return WelcomeController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\WelcomeController::__invoke
 * @see app/Http/Controllers/WelcomeController.php:23
 * @route '/'
 */
WelcomeController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: WelcomeController.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\WelcomeController::__invoke
 * @see app/Http/Controllers/WelcomeController.php:23
 * @route '/'
 */
WelcomeController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: WelcomeController.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\WelcomeController::__invoke
 * @see app/Http/Controllers/WelcomeController.php:23
 * @route '/'
 */
    const WelcomeControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: WelcomeController.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\WelcomeController::__invoke
 * @see app/Http/Controllers/WelcomeController.php:23
 * @route '/'
 */
        WelcomeControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: WelcomeController.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\WelcomeController::__invoke
 * @see app/Http/Controllers/WelcomeController.php:23
 * @route '/'
 */
        WelcomeControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: WelcomeController.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    WelcomeController.form = WelcomeControllerForm
/**
* @see \App\Http\Controllers\WelcomeController::fullTechStack
 * @see app/Http/Controllers/WelcomeController.php:108
 * @route '/tech-stack'
 */
export const fullTechStack = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fullTechStack.url(options),
    method: 'get',
})

fullTechStack.definition = {
    methods: ["get","head"],
    url: '/tech-stack',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WelcomeController::fullTechStack
 * @see app/Http/Controllers/WelcomeController.php:108
 * @route '/tech-stack'
 */
fullTechStack.url = (options?: RouteQueryOptions) => {
    return fullTechStack.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\WelcomeController::fullTechStack
 * @see app/Http/Controllers/WelcomeController.php:108
 * @route '/tech-stack'
 */
fullTechStack.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fullTechStack.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\WelcomeController::fullTechStack
 * @see app/Http/Controllers/WelcomeController.php:108
 * @route '/tech-stack'
 */
fullTechStack.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: fullTechStack.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\WelcomeController::fullTechStack
 * @see app/Http/Controllers/WelcomeController.php:108
 * @route '/tech-stack'
 */
    const fullTechStackForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: fullTechStack.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\WelcomeController::fullTechStack
 * @see app/Http/Controllers/WelcomeController.php:108
 * @route '/tech-stack'
 */
        fullTechStackForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: fullTechStack.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\WelcomeController::fullTechStack
 * @see app/Http/Controllers/WelcomeController.php:108
 * @route '/tech-stack'
 */
        fullTechStackForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: fullTechStack.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    fullTechStack.form = fullTechStackForm
/**
* @see \App\Http\Controllers\WelcomeController::selectedProjects
 * @see app/Http/Controllers/WelcomeController.php:125
 * @route '/projects'
 */
export const selectedProjects = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: selectedProjects.url(options),
    method: 'get',
})

selectedProjects.definition = {
    methods: ["get","head"],
    url: '/projects',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WelcomeController::selectedProjects
 * @see app/Http/Controllers/WelcomeController.php:125
 * @route '/projects'
 */
selectedProjects.url = (options?: RouteQueryOptions) => {
    return selectedProjects.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\WelcomeController::selectedProjects
 * @see app/Http/Controllers/WelcomeController.php:125
 * @route '/projects'
 */
selectedProjects.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: selectedProjects.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\WelcomeController::selectedProjects
 * @see app/Http/Controllers/WelcomeController.php:125
 * @route '/projects'
 */
selectedProjects.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: selectedProjects.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\WelcomeController::selectedProjects
 * @see app/Http/Controllers/WelcomeController.php:125
 * @route '/projects'
 */
    const selectedProjectsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: selectedProjects.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\WelcomeController::selectedProjects
 * @see app/Http/Controllers/WelcomeController.php:125
 * @route '/projects'
 */
        selectedProjectsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: selectedProjects.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\WelcomeController::selectedProjects
 * @see app/Http/Controllers/WelcomeController.php:125
 * @route '/projects'
 */
        selectedProjectsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: selectedProjects.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    selectedProjects.form = selectedProjectsForm
WelcomeController.fullTechStack = fullTechStack
WelcomeController.selectedProjects = selectedProjects

export default WelcomeController