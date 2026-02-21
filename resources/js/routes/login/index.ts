import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:58
 * @route '/login-0416'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/login-0416',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:58
 * @route '/login-0416'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:58
 * @route '/login-0416'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:58
 * @route '/login-0416'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:58
 * @route '/login-0416'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
 * @see routes/web.php:11
 * @route '/login'
 */
export const block = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: block.url(options),
    method: 'get',
})

block.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:11
 * @route '/login'
 */
block.url = (options?: RouteQueryOptions) => {
    return block.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:11
 * @route '/login'
 */
block.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: block.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:11
 * @route '/login'
 */
block.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: block.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:11
 * @route '/login'
 */
    const blockForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: block.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:11
 * @route '/login'
 */
        blockForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: block.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:11
 * @route '/login'
 */
        blockForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: block.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    block.form = blockForm
const login = {
    store: Object.assign(store, store),
block: Object.assign(block, block),
}

export default login