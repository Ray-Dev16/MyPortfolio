import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:300
 * @route '/dashboard/portfolio/experiences'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolio/experiences',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:300
 * @route '/dashboard/portfolio/experiences'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:300
 * @route '/dashboard/portfolio/experiences'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:300
 * @route '/dashboard/portfolio/experiences'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:300
 * @route '/dashboard/portfolio/experiences'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:300
 * @route '/dashboard/portfolio/experiences'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:300
 * @route '/dashboard/portfolio/experiences'
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
 * @see app/Http/Controllers/PortfolioController.php:315
 * @route '/dashboard/portfolio/experiences'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/portfolio/experiences',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PortfolioController::store
 * @see app/Http/Controllers/PortfolioController.php:315
 * @route '/dashboard/portfolio/experiences'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::store
 * @see app/Http/Controllers/PortfolioController.php:315
 * @route '/dashboard/portfolio/experiences'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PortfolioController::store
 * @see app/Http/Controllers/PortfolioController.php:315
 * @route '/dashboard/portfolio/experiences'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::store
 * @see app/Http/Controllers/PortfolioController.php:315
 * @route '/dashboard/portfolio/experiences'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:328
 * @route '/dashboard/portfolio/experiences/{experience}'
 */
export const update = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/portfolio/experiences/{experience}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:328
 * @route '/dashboard/portfolio/experiences/{experience}'
 */
update.url = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { experience: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    experience: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        experience: args.experience,
                }

    return update.definition.url
            .replace('{experience}', parsedArgs.experience.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:328
 * @route '/dashboard/portfolio/experiences/{experience}'
 */
update.put = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:328
 * @route '/dashboard/portfolio/experiences/{experience}'
 */
    const updateForm = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @see app/Http/Controllers/PortfolioController.php:328
 * @route '/dashboard/portfolio/experiences/{experience}'
 */
        updateForm.put = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @see app/Http/Controllers/PortfolioController.php:341
 * @route '/dashboard/portfolio/experiences/{experience}'
 */
export const destroy = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/portfolio/experiences/{experience}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PortfolioController::destroy
 * @see app/Http/Controllers/PortfolioController.php:341
 * @route '/dashboard/portfolio/experiences/{experience}'
 */
destroy.url = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { experience: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    experience: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        experience: args.experience,
                }

    return destroy.definition.url
            .replace('{experience}', parsedArgs.experience.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::destroy
 * @see app/Http/Controllers/PortfolioController.php:341
 * @route '/dashboard/portfolio/experiences/{experience}'
 */
destroy.delete = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PortfolioController::destroy
 * @see app/Http/Controllers/PortfolioController.php:341
 * @route '/dashboard/portfolio/experiences/{experience}'
 */
    const destroyForm = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @see app/Http/Controllers/PortfolioController.php:341
 * @route '/dashboard/portfolio/experiences/{experience}'
 */
        destroyForm.delete = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const experiences = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default experiences