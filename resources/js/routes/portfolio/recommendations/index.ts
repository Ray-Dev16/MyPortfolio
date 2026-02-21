import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:476
 * @route '/dashboard/portfolio/recommendations'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolio/recommendations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:476
 * @route '/dashboard/portfolio/recommendations'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:476
 * @route '/dashboard/portfolio/recommendations'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:476
 * @route '/dashboard/portfolio/recommendations'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:476
 * @route '/dashboard/portfolio/recommendations'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:476
 * @route '/dashboard/portfolio/recommendations'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:476
 * @route '/dashboard/portfolio/recommendations'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\PortfolioController::store
 * @see app/Http/Controllers/PortfolioController.php:490
 * @route '/dashboard/portfolio/recommendations'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/portfolio/recommendations',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PortfolioController::store
 * @see app/Http/Controllers/PortfolioController.php:490
 * @route '/dashboard/portfolio/recommendations'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::store
 * @see app/Http/Controllers/PortfolioController.php:490
 * @route '/dashboard/portfolio/recommendations'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PortfolioController::store
 * @see app/Http/Controllers/PortfolioController.php:490
 * @route '/dashboard/portfolio/recommendations'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::store
 * @see app/Http/Controllers/PortfolioController.php:490
 * @route '/dashboard/portfolio/recommendations'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:502
 * @route '/dashboard/portfolio/recommendations/{recommendation}'
 */
export const update = (args: { recommendation: string | number } | [recommendation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/portfolio/recommendations/{recommendation}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:502
 * @route '/dashboard/portfolio/recommendations/{recommendation}'
 */
update.url = (args: { recommendation: string | number } | [recommendation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { recommendation: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    recommendation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        recommendation: args.recommendation,
                }

    return update.definition.url
            .replace('{recommendation}', parsedArgs.recommendation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:502
 * @route '/dashboard/portfolio/recommendations/{recommendation}'
 */
update.put = (args: { recommendation: string | number } | [recommendation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:502
 * @route '/dashboard/portfolio/recommendations/{recommendation}'
 */
    const updateForm = (args: { recommendation: string | number } | [recommendation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:502
 * @route '/dashboard/portfolio/recommendations/{recommendation}'
 */
        updateForm.put = (args: { recommendation: string | number } | [recommendation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\PortfolioController::destroy
 * @see app/Http/Controllers/PortfolioController.php:514
 * @route '/dashboard/portfolio/recommendations/{recommendation}'
 */
export const destroy = (args: { recommendation: string | number } | [recommendation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/portfolio/recommendations/{recommendation}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PortfolioController::destroy
 * @see app/Http/Controllers/PortfolioController.php:514
 * @route '/dashboard/portfolio/recommendations/{recommendation}'
 */
destroy.url = (args: { recommendation: string | number } | [recommendation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { recommendation: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    recommendation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        recommendation: args.recommendation,
                }

    return destroy.definition.url
            .replace('{recommendation}', parsedArgs.recommendation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::destroy
 * @see app/Http/Controllers/PortfolioController.php:514
 * @route '/dashboard/portfolio/recommendations/{recommendation}'
 */
destroy.delete = (args: { recommendation: string | number } | [recommendation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PortfolioController::destroy
 * @see app/Http/Controllers/PortfolioController.php:514
 * @route '/dashboard/portfolio/recommendations/{recommendation}'
 */
    const destroyForm = (args: { recommendation: string | number } | [recommendation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::destroy
 * @see app/Http/Controllers/PortfolioController.php:514
 * @route '/dashboard/portfolio/recommendations/{recommendation}'
 */
        destroyForm.delete = (args: { recommendation: string | number } | [recommendation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const recommendations = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default recommendations