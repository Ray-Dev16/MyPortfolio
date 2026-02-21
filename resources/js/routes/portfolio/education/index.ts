import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\PortfolioController::edit
 * @see app/Http/Controllers/PortfolioController.php:226
 * @route '/dashboard/portfolio/education'
 */
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolio/education',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::edit
 * @see app/Http/Controllers/PortfolioController.php:226
 * @route '/dashboard/portfolio/education'
 */
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::edit
 * @see app/Http/Controllers/PortfolioController.php:226
 * @route '/dashboard/portfolio/education'
 */
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::edit
 * @see app/Http/Controllers/PortfolioController.php:226
 * @route '/dashboard/portfolio/education'
 */
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::edit
 * @see app/Http/Controllers/PortfolioController.php:226
 * @route '/dashboard/portfolio/education'
 */
    const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::edit
 * @see app/Http/Controllers/PortfolioController.php:226
 * @route '/dashboard/portfolio/education'
 */
        editForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::edit
 * @see app/Http/Controllers/PortfolioController.php:226
 * @route '/dashboard/portfolio/education'
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
 * @see app/Http/Controllers/PortfolioController.php:256
 * @route '/dashboard/portfolio/education'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/portfolio/education',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:256
 * @route '/dashboard/portfolio/education'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:256
 * @route '/dashboard/portfolio/education'
 */
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\PortfolioController::update
 * @see app/Http/Controllers/PortfolioController.php:256
 * @route '/dashboard/portfolio/education'
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
 * @see app/Http/Controllers/PortfolioController.php:256
 * @route '/dashboard/portfolio/education'
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
    
    update.form = updateForm
const education = {
    edit: Object.assign(edit, edit),
update: Object.assign(update, update),
}

export default education