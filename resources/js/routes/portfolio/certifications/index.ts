import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:413
 * @route '/dashboard/portfolio/certifications'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolio/certifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:413
 * @route '/dashboard/portfolio/certifications'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:413
 * @route '/dashboard/portfolio/certifications'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:413
 * @route '/dashboard/portfolio/certifications'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:413
 * @route '/dashboard/portfolio/certifications'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:413
 * @route '/dashboard/portfolio/certifications'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:413
 * @route '/dashboard/portfolio/certifications'
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
 * @see app/Http/Controllers/PortfolioController.php:430
 * @route '/dashboard/portfolio/certifications'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/portfolio/certifications',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PortfolioController::store
 * @see app/Http/Controllers/PortfolioController.php:430
 * @route '/dashboard/portfolio/certifications'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::store
 * @see app/Http/Controllers/PortfolioController.php:430
 * @route '/dashboard/portfolio/certifications'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PortfolioController::store
 * @see app/Http/Controllers/PortfolioController.php:430
 * @route '/dashboard/portfolio/certifications'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::store
 * @see app/Http/Controllers/PortfolioController.php:430
 * @route '/dashboard/portfolio/certifications'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:448
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
export const update = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","post"],
    url: '/dashboard/portfolio/certifications/{certification}',
} satisfies RouteDefinition<["put","post"]>

/**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:448
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
update.url = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { certification: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    certification: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        certification: args.certification,
                }

    return update.definition.url
            .replace('{certification}', parsedArgs.certification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:448
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
update.put = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:448
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
update.post = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:448
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
    const updateForm = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @see app/Http/Controllers/PortfolioController.php:448
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
        updateForm.put = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @see app/Http/Controllers/PortfolioController.php:448
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
        updateForm.post = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, options),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\PortfolioController::destroy
 * @see app/Http/Controllers/PortfolioController.php:469
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
export const destroy = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/portfolio/certifications/{certification}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PortfolioController::destroy
 * @see app/Http/Controllers/PortfolioController.php:469
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
destroy.url = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { certification: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    certification: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        certification: args.certification,
                }

    return destroy.definition.url
            .replace('{certification}', parsedArgs.certification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::destroy
 * @see app/Http/Controllers/PortfolioController.php:469
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
destroy.delete = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PortfolioController::destroy
 * @see app/Http/Controllers/PortfolioController.php:469
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
    const destroyForm = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @see app/Http/Controllers/PortfolioController.php:469
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
        destroyForm.delete = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const certifications = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default certifications