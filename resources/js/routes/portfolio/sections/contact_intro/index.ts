import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PortfolioController::edit
 * @see app/Http/Controllers/PortfolioController.php:143
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolio/sections/contact_intro',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::edit
 * @see app/Http/Controllers/PortfolioController.php:143
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::edit
 * @see app/Http/Controllers/PortfolioController.php:143
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::edit
 * @see app/Http/Controllers/PortfolioController.php:143
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::edit
 * @see app/Http/Controllers/PortfolioController.php:143
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
    const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::edit
 * @see app/Http/Controllers/PortfolioController.php:143
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
        editForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::edit
 * @see app/Http/Controllers/PortfolioController.php:143
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
        editForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:148
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put","post"],
    url: '/dashboard/portfolio/sections/contact_intro',
} satisfies RouteDefinition<["put","post"]>

/**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:148
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:148
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:148
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:148
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:148
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
        updateForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:148
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
        updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(options),
            method: 'post',
        })
    
    update.form = updateForm
const contact_intro = {
    edit: Object.assign(edit, edit),
update: Object.assign(update, update),
}

export default contact_intro