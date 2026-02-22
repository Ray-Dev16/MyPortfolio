import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PortfolioController::editProfile
 * @see app/Http/Controllers/PortfolioController.php:38
 * @route '/dashboard/portfolio/profile'
 */
export const editProfile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editProfile.url(options),
    method: 'get',
})

editProfile.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolio/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::editProfile
 * @see app/Http/Controllers/PortfolioController.php:38
 * @route '/dashboard/portfolio/profile'
 */
editProfile.url = (options?: RouteQueryOptions) => {
    return editProfile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::editProfile
 * @see app/Http/Controllers/PortfolioController.php:38
 * @route '/dashboard/portfolio/profile'
 */
editProfile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editProfile.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::editProfile
 * @see app/Http/Controllers/PortfolioController.php:38
 * @route '/dashboard/portfolio/profile'
 */
editProfile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editProfile.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::editProfile
 * @see app/Http/Controllers/PortfolioController.php:38
 * @route '/dashboard/portfolio/profile'
 */
    const editProfileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: editProfile.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::editProfile
 * @see app/Http/Controllers/PortfolioController.php:38
 * @route '/dashboard/portfolio/profile'
 */
        editProfileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: editProfile.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::editProfile
 * @see app/Http/Controllers/PortfolioController.php:38
 * @route '/dashboard/portfolio/profile'
 */
        editProfileForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: editProfile.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    editProfile.form = editProfileForm
/**
* @see \App\Http\Controllers\PortfolioController::updateProfile
 * @see app/Http/Controllers/PortfolioController.php:60
 * @route '/dashboard/portfolio/profile'
 */
export const updateProfile = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateProfile.url(options),
    method: 'put',
})

updateProfile.definition = {
    methods: ["put"],
    url: '/dashboard/portfolio/profile',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\PortfolioController::updateProfile
 * @see app/Http/Controllers/PortfolioController.php:60
 * @route '/dashboard/portfolio/profile'
 */
updateProfile.url = (options?: RouteQueryOptions) => {
    return updateProfile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::updateProfile
 * @see app/Http/Controllers/PortfolioController.php:60
 * @route '/dashboard/portfolio/profile'
 */
updateProfile.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateProfile.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\PortfolioController::updateProfile
 * @see app/Http/Controllers/PortfolioController.php:60
 * @route '/dashboard/portfolio/profile'
 */
    const updateProfileForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateProfile.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::updateProfile
 * @see app/Http/Controllers/PortfolioController.php:60
 * @route '/dashboard/portfolio/profile'
 */
        updateProfileForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateProfile.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateProfile.form = updateProfileForm
/**
* @see \App\Http\Controllers\PortfolioController::editSectionAbout
 * @see app/Http/Controllers/PortfolioController.php:123
 * @route '/dashboard/portfolio/sections/about'
 */
export const editSectionAbout = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editSectionAbout.url(options),
    method: 'get',
})

editSectionAbout.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolio/sections/about',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::editSectionAbout
 * @see app/Http/Controllers/PortfolioController.php:123
 * @route '/dashboard/portfolio/sections/about'
 */
editSectionAbout.url = (options?: RouteQueryOptions) => {
    return editSectionAbout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::editSectionAbout
 * @see app/Http/Controllers/PortfolioController.php:123
 * @route '/dashboard/portfolio/sections/about'
 */
editSectionAbout.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editSectionAbout.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::editSectionAbout
 * @see app/Http/Controllers/PortfolioController.php:123
 * @route '/dashboard/portfolio/sections/about'
 */
editSectionAbout.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editSectionAbout.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::editSectionAbout
 * @see app/Http/Controllers/PortfolioController.php:123
 * @route '/dashboard/portfolio/sections/about'
 */
    const editSectionAboutForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: editSectionAbout.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::editSectionAbout
 * @see app/Http/Controllers/PortfolioController.php:123
 * @route '/dashboard/portfolio/sections/about'
 */
        editSectionAboutForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: editSectionAbout.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::editSectionAbout
 * @see app/Http/Controllers/PortfolioController.php:123
 * @route '/dashboard/portfolio/sections/about'
 */
        editSectionAboutForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: editSectionAbout.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    editSectionAbout.form = editSectionAboutForm
/**
* @see \App\Http\Controllers\PortfolioController::updateSectionAbout
 * @see app/Http/Controllers/PortfolioController.php:128
 * @route '/dashboard/portfolio/sections/about'
 */
export const updateSectionAbout = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateSectionAbout.url(options),
    method: 'put',
})

updateSectionAbout.definition = {
    methods: ["put","post"],
    url: '/dashboard/portfolio/sections/about',
} satisfies RouteDefinition<["put","post"]>

/**
* @see \App\Http\Controllers\PortfolioController::updateSectionAbout
 * @see app/Http/Controllers/PortfolioController.php:128
 * @route '/dashboard/portfolio/sections/about'
 */
updateSectionAbout.url = (options?: RouteQueryOptions) => {
    return updateSectionAbout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::updateSectionAbout
 * @see app/Http/Controllers/PortfolioController.php:128
 * @route '/dashboard/portfolio/sections/about'
 */
updateSectionAbout.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateSectionAbout.url(options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\PortfolioController::updateSectionAbout
 * @see app/Http/Controllers/PortfolioController.php:128
 * @route '/dashboard/portfolio/sections/about'
 */
updateSectionAbout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateSectionAbout.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PortfolioController::updateSectionAbout
 * @see app/Http/Controllers/PortfolioController.php:128
 * @route '/dashboard/portfolio/sections/about'
 */
    const updateSectionAboutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateSectionAbout.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::updateSectionAbout
 * @see app/Http/Controllers/PortfolioController.php:128
 * @route '/dashboard/portfolio/sections/about'
 */
        updateSectionAboutForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateSectionAbout.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::updateSectionAbout
 * @see app/Http/Controllers/PortfolioController.php:128
 * @route '/dashboard/portfolio/sections/about'
 */
        updateSectionAboutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateSectionAbout.url(options),
            method: 'post',
        })
    
    updateSectionAbout.form = updateSectionAboutForm
/**
* @see \App\Http\Controllers\PortfolioController::editSectionBeyondScreen
 * @see app/Http/Controllers/PortfolioController.php:133
 * @route '/dashboard/portfolio/sections/beyond_screen'
 */
export const editSectionBeyondScreen = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editSectionBeyondScreen.url(options),
    method: 'get',
})

editSectionBeyondScreen.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolio/sections/beyond_screen',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::editSectionBeyondScreen
 * @see app/Http/Controllers/PortfolioController.php:133
 * @route '/dashboard/portfolio/sections/beyond_screen'
 */
editSectionBeyondScreen.url = (options?: RouteQueryOptions) => {
    return editSectionBeyondScreen.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::editSectionBeyondScreen
 * @see app/Http/Controllers/PortfolioController.php:133
 * @route '/dashboard/portfolio/sections/beyond_screen'
 */
editSectionBeyondScreen.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editSectionBeyondScreen.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::editSectionBeyondScreen
 * @see app/Http/Controllers/PortfolioController.php:133
 * @route '/dashboard/portfolio/sections/beyond_screen'
 */
editSectionBeyondScreen.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editSectionBeyondScreen.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::editSectionBeyondScreen
 * @see app/Http/Controllers/PortfolioController.php:133
 * @route '/dashboard/portfolio/sections/beyond_screen'
 */
    const editSectionBeyondScreenForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: editSectionBeyondScreen.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::editSectionBeyondScreen
 * @see app/Http/Controllers/PortfolioController.php:133
 * @route '/dashboard/portfolio/sections/beyond_screen'
 */
        editSectionBeyondScreenForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: editSectionBeyondScreen.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::editSectionBeyondScreen
 * @see app/Http/Controllers/PortfolioController.php:133
 * @route '/dashboard/portfolio/sections/beyond_screen'
 */
        editSectionBeyondScreenForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: editSectionBeyondScreen.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    editSectionBeyondScreen.form = editSectionBeyondScreenForm
/**
* @see \App\Http\Controllers\PortfolioController::updateSectionBeyondScreen
 * @see app/Http/Controllers/PortfolioController.php:138
 * @route '/dashboard/portfolio/sections/beyond_screen'
 */
export const updateSectionBeyondScreen = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateSectionBeyondScreen.url(options),
    method: 'put',
})

updateSectionBeyondScreen.definition = {
    methods: ["put","post"],
    url: '/dashboard/portfolio/sections/beyond_screen',
} satisfies RouteDefinition<["put","post"]>

/**
* @see \App\Http\Controllers\PortfolioController::updateSectionBeyondScreen
 * @see app/Http/Controllers/PortfolioController.php:138
 * @route '/dashboard/portfolio/sections/beyond_screen'
 */
updateSectionBeyondScreen.url = (options?: RouteQueryOptions) => {
    return updateSectionBeyondScreen.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::updateSectionBeyondScreen
 * @see app/Http/Controllers/PortfolioController.php:138
 * @route '/dashboard/portfolio/sections/beyond_screen'
 */
updateSectionBeyondScreen.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateSectionBeyondScreen.url(options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\PortfolioController::updateSectionBeyondScreen
 * @see app/Http/Controllers/PortfolioController.php:138
 * @route '/dashboard/portfolio/sections/beyond_screen'
 */
updateSectionBeyondScreen.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateSectionBeyondScreen.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PortfolioController::updateSectionBeyondScreen
 * @see app/Http/Controllers/PortfolioController.php:138
 * @route '/dashboard/portfolio/sections/beyond_screen'
 */
    const updateSectionBeyondScreenForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateSectionBeyondScreen.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::updateSectionBeyondScreen
 * @see app/Http/Controllers/PortfolioController.php:138
 * @route '/dashboard/portfolio/sections/beyond_screen'
 */
        updateSectionBeyondScreenForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateSectionBeyondScreen.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::updateSectionBeyondScreen
 * @see app/Http/Controllers/PortfolioController.php:138
 * @route '/dashboard/portfolio/sections/beyond_screen'
 */
        updateSectionBeyondScreenForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateSectionBeyondScreen.url(options),
            method: 'post',
        })
    
    updateSectionBeyondScreen.form = updateSectionBeyondScreenForm
/**
* @see \App\Http\Controllers\PortfolioController::editSectionContactIntro
 * @see app/Http/Controllers/PortfolioController.php:143
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
export const editSectionContactIntro = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editSectionContactIntro.url(options),
    method: 'get',
})

editSectionContactIntro.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolio/sections/contact_intro',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::editSectionContactIntro
 * @see app/Http/Controllers/PortfolioController.php:143
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
editSectionContactIntro.url = (options?: RouteQueryOptions) => {
    return editSectionContactIntro.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::editSectionContactIntro
 * @see app/Http/Controllers/PortfolioController.php:143
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
editSectionContactIntro.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editSectionContactIntro.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::editSectionContactIntro
 * @see app/Http/Controllers/PortfolioController.php:143
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
editSectionContactIntro.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editSectionContactIntro.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::editSectionContactIntro
 * @see app/Http/Controllers/PortfolioController.php:143
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
    const editSectionContactIntroForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: editSectionContactIntro.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::editSectionContactIntro
 * @see app/Http/Controllers/PortfolioController.php:143
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
        editSectionContactIntroForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: editSectionContactIntro.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::editSectionContactIntro
 * @see app/Http/Controllers/PortfolioController.php:143
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
        editSectionContactIntroForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: editSectionContactIntro.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    editSectionContactIntro.form = editSectionContactIntroForm
/**
* @see \App\Http\Controllers\PortfolioController::updateSectionContactIntro
 * @see app/Http/Controllers/PortfolioController.php:148
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
export const updateSectionContactIntro = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateSectionContactIntro.url(options),
    method: 'put',
})

updateSectionContactIntro.definition = {
    methods: ["put","post"],
    url: '/dashboard/portfolio/sections/contact_intro',
} satisfies RouteDefinition<["put","post"]>

/**
* @see \App\Http\Controllers\PortfolioController::updateSectionContactIntro
 * @see app/Http/Controllers/PortfolioController.php:148
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
updateSectionContactIntro.url = (options?: RouteQueryOptions) => {
    return updateSectionContactIntro.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::updateSectionContactIntro
 * @see app/Http/Controllers/PortfolioController.php:148
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
updateSectionContactIntro.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateSectionContactIntro.url(options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\PortfolioController::updateSectionContactIntro
 * @see app/Http/Controllers/PortfolioController.php:148
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
updateSectionContactIntro.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateSectionContactIntro.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PortfolioController::updateSectionContactIntro
 * @see app/Http/Controllers/PortfolioController.php:148
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
    const updateSectionContactIntroForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateSectionContactIntro.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::updateSectionContactIntro
 * @see app/Http/Controllers/PortfolioController.php:148
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
        updateSectionContactIntroForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateSectionContactIntro.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::updateSectionContactIntro
 * @see app/Http/Controllers/PortfolioController.php:148
 * @route '/dashboard/portfolio/sections/contact_intro'
 */
        updateSectionContactIntroForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateSectionContactIntro.url(options),
            method: 'post',
        })
    
    updateSectionContactIntro.form = updateSectionContactIntroForm
/**
* @see \App\Http\Controllers\PortfolioController::editEducation
 * @see app/Http/Controllers/PortfolioController.php:226
 * @route '/dashboard/portfolio/education'
 */
export const editEducation = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editEducation.url(options),
    method: 'get',
})

editEducation.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolio/education',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::editEducation
 * @see app/Http/Controllers/PortfolioController.php:226
 * @route '/dashboard/portfolio/education'
 */
editEducation.url = (options?: RouteQueryOptions) => {
    return editEducation.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::editEducation
 * @see app/Http/Controllers/PortfolioController.php:226
 * @route '/dashboard/portfolio/education'
 */
editEducation.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editEducation.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::editEducation
 * @see app/Http/Controllers/PortfolioController.php:226
 * @route '/dashboard/portfolio/education'
 */
editEducation.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editEducation.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::editEducation
 * @see app/Http/Controllers/PortfolioController.php:226
 * @route '/dashboard/portfolio/education'
 */
    const editEducationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: editEducation.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::editEducation
 * @see app/Http/Controllers/PortfolioController.php:226
 * @route '/dashboard/portfolio/education'
 */
        editEducationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: editEducation.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::editEducation
 * @see app/Http/Controllers/PortfolioController.php:226
 * @route '/dashboard/portfolio/education'
 */
        editEducationForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: editEducation.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    editEducation.form = editEducationForm
/**
* @see \App\Http\Controllers\PortfolioController::updateEducation
 * @see app/Http/Controllers/PortfolioController.php:256
 * @route '/dashboard/portfolio/education'
 */
export const updateEducation = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateEducation.url(options),
    method: 'put',
})

updateEducation.definition = {
    methods: ["put"],
    url: '/dashboard/portfolio/education',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\PortfolioController::updateEducation
 * @see app/Http/Controllers/PortfolioController.php:256
 * @route '/dashboard/portfolio/education'
 */
updateEducation.url = (options?: RouteQueryOptions) => {
    return updateEducation.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::updateEducation
 * @see app/Http/Controllers/PortfolioController.php:256
 * @route '/dashboard/portfolio/education'
 */
updateEducation.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateEducation.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\PortfolioController::updateEducation
 * @see app/Http/Controllers/PortfolioController.php:256
 * @route '/dashboard/portfolio/education'
 */
    const updateEducationForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateEducation.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::updateEducation
 * @see app/Http/Controllers/PortfolioController.php:256
 * @route '/dashboard/portfolio/education'
 */
        updateEducationForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateEducation.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateEducation.form = updateEducationForm
/**
* @see \App\Http\Controllers\PortfolioController::editContactCta
 * @see app/Http/Controllers/PortfolioController.php:89
 * @route '/dashboard/portfolio/contact-cta'
 */
export const editContactCta = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editContactCta.url(options),
    method: 'get',
})

editContactCta.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolio/contact-cta',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::editContactCta
 * @see app/Http/Controllers/PortfolioController.php:89
 * @route '/dashboard/portfolio/contact-cta'
 */
editContactCta.url = (options?: RouteQueryOptions) => {
    return editContactCta.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::editContactCta
 * @see app/Http/Controllers/PortfolioController.php:89
 * @route '/dashboard/portfolio/contact-cta'
 */
editContactCta.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editContactCta.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::editContactCta
 * @see app/Http/Controllers/PortfolioController.php:89
 * @route '/dashboard/portfolio/contact-cta'
 */
editContactCta.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editContactCta.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::editContactCta
 * @see app/Http/Controllers/PortfolioController.php:89
 * @route '/dashboard/portfolio/contact-cta'
 */
    const editContactCtaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: editContactCta.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::editContactCta
 * @see app/Http/Controllers/PortfolioController.php:89
 * @route '/dashboard/portfolio/contact-cta'
 */
        editContactCtaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: editContactCta.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::editContactCta
 * @see app/Http/Controllers/PortfolioController.php:89
 * @route '/dashboard/portfolio/contact-cta'
 */
        editContactCtaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: editContactCta.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    editContactCta.form = editContactCtaForm
/**
* @see \App\Http\Controllers\PortfolioController::updateContactCta
 * @see app/Http/Controllers/PortfolioController.php:102
 * @route '/dashboard/portfolio/contact-cta'
 */
export const updateContactCta = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateContactCta.url(options),
    method: 'put',
})

updateContactCta.definition = {
    methods: ["put"],
    url: '/dashboard/portfolio/contact-cta',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\PortfolioController::updateContactCta
 * @see app/Http/Controllers/PortfolioController.php:102
 * @route '/dashboard/portfolio/contact-cta'
 */
updateContactCta.url = (options?: RouteQueryOptions) => {
    return updateContactCta.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::updateContactCta
 * @see app/Http/Controllers/PortfolioController.php:102
 * @route '/dashboard/portfolio/contact-cta'
 */
updateContactCta.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateContactCta.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\PortfolioController::updateContactCta
 * @see app/Http/Controllers/PortfolioController.php:102
 * @route '/dashboard/portfolio/contact-cta'
 */
    const updateContactCtaForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateContactCta.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::updateContactCta
 * @see app/Http/Controllers/PortfolioController.php:102
 * @route '/dashboard/portfolio/contact-cta'
 */
        updateContactCtaForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateContactCta.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateContactCta.form = updateContactCtaForm
/**
* @see \App\Http\Controllers\PortfolioController::experiencesIndex
 * @see app/Http/Controllers/PortfolioController.php:300
 * @route '/dashboard/portfolio/experiences'
 */
export const experiencesIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: experiencesIndex.url(options),
    method: 'get',
})

experiencesIndex.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolio/experiences',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::experiencesIndex
 * @see app/Http/Controllers/PortfolioController.php:300
 * @route '/dashboard/portfolio/experiences'
 */
experiencesIndex.url = (options?: RouteQueryOptions) => {
    return experiencesIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::experiencesIndex
 * @see app/Http/Controllers/PortfolioController.php:300
 * @route '/dashboard/portfolio/experiences'
 */
experiencesIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: experiencesIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::experiencesIndex
 * @see app/Http/Controllers/PortfolioController.php:300
 * @route '/dashboard/portfolio/experiences'
 */
experiencesIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: experiencesIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::experiencesIndex
 * @see app/Http/Controllers/PortfolioController.php:300
 * @route '/dashboard/portfolio/experiences'
 */
    const experiencesIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: experiencesIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::experiencesIndex
 * @see app/Http/Controllers/PortfolioController.php:300
 * @route '/dashboard/portfolio/experiences'
 */
        experiencesIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: experiencesIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::experiencesIndex
 * @see app/Http/Controllers/PortfolioController.php:300
 * @route '/dashboard/portfolio/experiences'
 */
        experiencesIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: experiencesIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    experiencesIndex.form = experiencesIndexForm
/**
* @see \App\Http\Controllers\PortfolioController::experiencesStore
 * @see app/Http/Controllers/PortfolioController.php:315
 * @route '/dashboard/portfolio/experiences'
 */
export const experiencesStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: experiencesStore.url(options),
    method: 'post',
})

experiencesStore.definition = {
    methods: ["post"],
    url: '/dashboard/portfolio/experiences',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PortfolioController::experiencesStore
 * @see app/Http/Controllers/PortfolioController.php:315
 * @route '/dashboard/portfolio/experiences'
 */
experiencesStore.url = (options?: RouteQueryOptions) => {
    return experiencesStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::experiencesStore
 * @see app/Http/Controllers/PortfolioController.php:315
 * @route '/dashboard/portfolio/experiences'
 */
experiencesStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: experiencesStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PortfolioController::experiencesStore
 * @see app/Http/Controllers/PortfolioController.php:315
 * @route '/dashboard/portfolio/experiences'
 */
    const experiencesStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: experiencesStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::experiencesStore
 * @see app/Http/Controllers/PortfolioController.php:315
 * @route '/dashboard/portfolio/experiences'
 */
        experiencesStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: experiencesStore.url(options),
            method: 'post',
        })
    
    experiencesStore.form = experiencesStoreForm
/**
* @see \App\Http\Controllers\PortfolioController::experiencesUpdate
 * @see app/Http/Controllers/PortfolioController.php:328
 * @route '/dashboard/portfolio/experiences/{experience}'
 */
export const experiencesUpdate = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: experiencesUpdate.url(args, options),
    method: 'put',
})

experiencesUpdate.definition = {
    methods: ["put"],
    url: '/dashboard/portfolio/experiences/{experience}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\PortfolioController::experiencesUpdate
 * @see app/Http/Controllers/PortfolioController.php:328
 * @route '/dashboard/portfolio/experiences/{experience}'
 */
experiencesUpdate.url = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return experiencesUpdate.definition.url
            .replace('{experience}', parsedArgs.experience.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::experiencesUpdate
 * @see app/Http/Controllers/PortfolioController.php:328
 * @route '/dashboard/portfolio/experiences/{experience}'
 */
experiencesUpdate.put = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: experiencesUpdate.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\PortfolioController::experiencesUpdate
 * @see app/Http/Controllers/PortfolioController.php:328
 * @route '/dashboard/portfolio/experiences/{experience}'
 */
    const experiencesUpdateForm = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: experiencesUpdate.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::experiencesUpdate
 * @see app/Http/Controllers/PortfolioController.php:328
 * @route '/dashboard/portfolio/experiences/{experience}'
 */
        experiencesUpdateForm.put = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: experiencesUpdate.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    experiencesUpdate.form = experiencesUpdateForm
/**
* @see \App\Http\Controllers\PortfolioController::experiencesDestroy
 * @see app/Http/Controllers/PortfolioController.php:341
 * @route '/dashboard/portfolio/experiences/{experience}'
 */
export const experiencesDestroy = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: experiencesDestroy.url(args, options),
    method: 'delete',
})

experiencesDestroy.definition = {
    methods: ["delete"],
    url: '/dashboard/portfolio/experiences/{experience}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PortfolioController::experiencesDestroy
 * @see app/Http/Controllers/PortfolioController.php:341
 * @route '/dashboard/portfolio/experiences/{experience}'
 */
experiencesDestroy.url = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return experiencesDestroy.definition.url
            .replace('{experience}', parsedArgs.experience.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::experiencesDestroy
 * @see app/Http/Controllers/PortfolioController.php:341
 * @route '/dashboard/portfolio/experiences/{experience}'
 */
experiencesDestroy.delete = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: experiencesDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PortfolioController::experiencesDestroy
 * @see app/Http/Controllers/PortfolioController.php:341
 * @route '/dashboard/portfolio/experiences/{experience}'
 */
    const experiencesDestroyForm = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: experiencesDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::experiencesDestroy
 * @see app/Http/Controllers/PortfolioController.php:341
 * @route '/dashboard/portfolio/experiences/{experience}'
 */
        experiencesDestroyForm.delete = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: experiencesDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    experiencesDestroy.form = experiencesDestroyForm
/**
* @see \App\Http\Controllers\PortfolioController::projectsIndex
 * @see app/Http/Controllers/PortfolioController.php:348
 * @route '/dashboard/portfolio/projects'
 */
export const projectsIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projectsIndex.url(options),
    method: 'get',
})

projectsIndex.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolio/projects',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::projectsIndex
 * @see app/Http/Controllers/PortfolioController.php:348
 * @route '/dashboard/portfolio/projects'
 */
projectsIndex.url = (options?: RouteQueryOptions) => {
    return projectsIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::projectsIndex
 * @see app/Http/Controllers/PortfolioController.php:348
 * @route '/dashboard/portfolio/projects'
 */
projectsIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projectsIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::projectsIndex
 * @see app/Http/Controllers/PortfolioController.php:348
 * @route '/dashboard/portfolio/projects'
 */
projectsIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: projectsIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::projectsIndex
 * @see app/Http/Controllers/PortfolioController.php:348
 * @route '/dashboard/portfolio/projects'
 */
    const projectsIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: projectsIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::projectsIndex
 * @see app/Http/Controllers/PortfolioController.php:348
 * @route '/dashboard/portfolio/projects'
 */
        projectsIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: projectsIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::projectsIndex
 * @see app/Http/Controllers/PortfolioController.php:348
 * @route '/dashboard/portfolio/projects'
 */
        projectsIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: projectsIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    projectsIndex.form = projectsIndexForm
/**
* @see \App\Http\Controllers\PortfolioController::projectsStore
 * @see app/Http/Controllers/PortfolioController.php:365
 * @route '/dashboard/portfolio/projects'
 */
export const projectsStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: projectsStore.url(options),
    method: 'post',
})

projectsStore.definition = {
    methods: ["post"],
    url: '/dashboard/portfolio/projects',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PortfolioController::projectsStore
 * @see app/Http/Controllers/PortfolioController.php:365
 * @route '/dashboard/portfolio/projects'
 */
projectsStore.url = (options?: RouteQueryOptions) => {
    return projectsStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::projectsStore
 * @see app/Http/Controllers/PortfolioController.php:365
 * @route '/dashboard/portfolio/projects'
 */
projectsStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: projectsStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PortfolioController::projectsStore
 * @see app/Http/Controllers/PortfolioController.php:365
 * @route '/dashboard/portfolio/projects'
 */
    const projectsStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: projectsStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::projectsStore
 * @see app/Http/Controllers/PortfolioController.php:365
 * @route '/dashboard/portfolio/projects'
 */
        projectsStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: projectsStore.url(options),
            method: 'post',
        })
    
    projectsStore.form = projectsStoreForm
/**
* @see \App\Http\Controllers\PortfolioController::projectsUpdate
 * @see app/Http/Controllers/PortfolioController.php:384
 * @route '/dashboard/portfolio/projects/{project}'
 */
export const projectsUpdate = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: projectsUpdate.url(args, options),
    method: 'put',
})

projectsUpdate.definition = {
    methods: ["put","post"],
    url: '/dashboard/portfolio/projects/{project}',
} satisfies RouteDefinition<["put","post"]>

/**
* @see \App\Http\Controllers\PortfolioController::projectsUpdate
 * @see app/Http/Controllers/PortfolioController.php:384
 * @route '/dashboard/portfolio/projects/{project}'
 */
projectsUpdate.url = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: args.project,
                }

    return projectsUpdate.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::projectsUpdate
 * @see app/Http/Controllers/PortfolioController.php:384
 * @route '/dashboard/portfolio/projects/{project}'
 */
projectsUpdate.put = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: projectsUpdate.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\PortfolioController::projectsUpdate
 * @see app/Http/Controllers/PortfolioController.php:384
 * @route '/dashboard/portfolio/projects/{project}'
 */
projectsUpdate.post = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: projectsUpdate.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PortfolioController::projectsUpdate
 * @see app/Http/Controllers/PortfolioController.php:384
 * @route '/dashboard/portfolio/projects/{project}'
 */
    const projectsUpdateForm = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: projectsUpdate.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::projectsUpdate
 * @see app/Http/Controllers/PortfolioController.php:384
 * @route '/dashboard/portfolio/projects/{project}'
 */
        projectsUpdateForm.put = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: projectsUpdate.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::projectsUpdate
 * @see app/Http/Controllers/PortfolioController.php:384
 * @route '/dashboard/portfolio/projects/{project}'
 */
        projectsUpdateForm.post = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: projectsUpdate.url(args, options),
            method: 'post',
        })
    
    projectsUpdate.form = projectsUpdateForm
/**
* @see \App\Http\Controllers\PortfolioController::projectsDestroy
 * @see app/Http/Controllers/PortfolioController.php:406
 * @route '/dashboard/portfolio/projects/{project}'
 */
export const projectsDestroy = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: projectsDestroy.url(args, options),
    method: 'delete',
})

projectsDestroy.definition = {
    methods: ["delete"],
    url: '/dashboard/portfolio/projects/{project}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PortfolioController::projectsDestroy
 * @see app/Http/Controllers/PortfolioController.php:406
 * @route '/dashboard/portfolio/projects/{project}'
 */
projectsDestroy.url = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: args.project,
                }

    return projectsDestroy.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::projectsDestroy
 * @see app/Http/Controllers/PortfolioController.php:406
 * @route '/dashboard/portfolio/projects/{project}'
 */
projectsDestroy.delete = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: projectsDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PortfolioController::projectsDestroy
 * @see app/Http/Controllers/PortfolioController.php:406
 * @route '/dashboard/portfolio/projects/{project}'
 */
    const projectsDestroyForm = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: projectsDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::projectsDestroy
 * @see app/Http/Controllers/PortfolioController.php:406
 * @route '/dashboard/portfolio/projects/{project}'
 */
        projectsDestroyForm.delete = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: projectsDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    projectsDestroy.form = projectsDestroyForm
/**
* @see \App\Http\Controllers\PortfolioController::certificationsIndex
 * @see app/Http/Controllers/PortfolioController.php:413
 * @route '/dashboard/portfolio/certifications'
 */
export const certificationsIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: certificationsIndex.url(options),
    method: 'get',
})

certificationsIndex.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolio/certifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::certificationsIndex
 * @see app/Http/Controllers/PortfolioController.php:413
 * @route '/dashboard/portfolio/certifications'
 */
certificationsIndex.url = (options?: RouteQueryOptions) => {
    return certificationsIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::certificationsIndex
 * @see app/Http/Controllers/PortfolioController.php:413
 * @route '/dashboard/portfolio/certifications'
 */
certificationsIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: certificationsIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::certificationsIndex
 * @see app/Http/Controllers/PortfolioController.php:413
 * @route '/dashboard/portfolio/certifications'
 */
certificationsIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: certificationsIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::certificationsIndex
 * @see app/Http/Controllers/PortfolioController.php:413
 * @route '/dashboard/portfolio/certifications'
 */
    const certificationsIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: certificationsIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::certificationsIndex
 * @see app/Http/Controllers/PortfolioController.php:413
 * @route '/dashboard/portfolio/certifications'
 */
        certificationsIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: certificationsIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::certificationsIndex
 * @see app/Http/Controllers/PortfolioController.php:413
 * @route '/dashboard/portfolio/certifications'
 */
        certificationsIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: certificationsIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    certificationsIndex.form = certificationsIndexForm
/**
* @see \App\Http\Controllers\PortfolioController::certificationsStore
 * @see app/Http/Controllers/PortfolioController.php:430
 * @route '/dashboard/portfolio/certifications'
 */
export const certificationsStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: certificationsStore.url(options),
    method: 'post',
})

certificationsStore.definition = {
    methods: ["post"],
    url: '/dashboard/portfolio/certifications',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PortfolioController::certificationsStore
 * @see app/Http/Controllers/PortfolioController.php:430
 * @route '/dashboard/portfolio/certifications'
 */
certificationsStore.url = (options?: RouteQueryOptions) => {
    return certificationsStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::certificationsStore
 * @see app/Http/Controllers/PortfolioController.php:430
 * @route '/dashboard/portfolio/certifications'
 */
certificationsStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: certificationsStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PortfolioController::certificationsStore
 * @see app/Http/Controllers/PortfolioController.php:430
 * @route '/dashboard/portfolio/certifications'
 */
    const certificationsStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: certificationsStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::certificationsStore
 * @see app/Http/Controllers/PortfolioController.php:430
 * @route '/dashboard/portfolio/certifications'
 */
        certificationsStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: certificationsStore.url(options),
            method: 'post',
        })
    
    certificationsStore.form = certificationsStoreForm
/**
* @see \App\Http\Controllers\PortfolioController::certificationsUpdate
 * @see app/Http/Controllers/PortfolioController.php:448
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
export const certificationsUpdate = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: certificationsUpdate.url(args, options),
    method: 'put',
})

certificationsUpdate.definition = {
    methods: ["put","post"],
    url: '/dashboard/portfolio/certifications/{certification}',
} satisfies RouteDefinition<["put","post"]>

/**
* @see \App\Http\Controllers\PortfolioController::certificationsUpdate
 * @see app/Http/Controllers/PortfolioController.php:448
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
certificationsUpdate.url = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return certificationsUpdate.definition.url
            .replace('{certification}', parsedArgs.certification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::certificationsUpdate
 * @see app/Http/Controllers/PortfolioController.php:448
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
certificationsUpdate.put = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: certificationsUpdate.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\PortfolioController::certificationsUpdate
 * @see app/Http/Controllers/PortfolioController.php:448
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
certificationsUpdate.post = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: certificationsUpdate.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PortfolioController::certificationsUpdate
 * @see app/Http/Controllers/PortfolioController.php:448
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
    const certificationsUpdateForm = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: certificationsUpdate.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::certificationsUpdate
 * @see app/Http/Controllers/PortfolioController.php:448
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
        certificationsUpdateForm.put = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: certificationsUpdate.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::certificationsUpdate
 * @see app/Http/Controllers/PortfolioController.php:448
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
        certificationsUpdateForm.post = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: certificationsUpdate.url(args, options),
            method: 'post',
        })
    
    certificationsUpdate.form = certificationsUpdateForm
/**
* @see \App\Http\Controllers\PortfolioController::certificationsDestroy
 * @see app/Http/Controllers/PortfolioController.php:469
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
export const certificationsDestroy = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: certificationsDestroy.url(args, options),
    method: 'delete',
})

certificationsDestroy.definition = {
    methods: ["delete"],
    url: '/dashboard/portfolio/certifications/{certification}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PortfolioController::certificationsDestroy
 * @see app/Http/Controllers/PortfolioController.php:469
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
certificationsDestroy.url = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return certificationsDestroy.definition.url
            .replace('{certification}', parsedArgs.certification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::certificationsDestroy
 * @see app/Http/Controllers/PortfolioController.php:469
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
certificationsDestroy.delete = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: certificationsDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PortfolioController::certificationsDestroy
 * @see app/Http/Controllers/PortfolioController.php:469
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
    const certificationsDestroyForm = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: certificationsDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::certificationsDestroy
 * @see app/Http/Controllers/PortfolioController.php:469
 * @route '/dashboard/portfolio/certifications/{certification}'
 */
        certificationsDestroyForm.delete = (args: { certification: string | number } | [certification: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: certificationsDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    certificationsDestroy.form = certificationsDestroyForm
/**
* @see \App\Http\Controllers\PortfolioController::recommendationsIndex
 * @see app/Http/Controllers/PortfolioController.php:476
 * @route '/dashboard/portfolio/recommendations'
 */
export const recommendationsIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recommendationsIndex.url(options),
    method: 'get',
})

recommendationsIndex.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolio/recommendations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::recommendationsIndex
 * @see app/Http/Controllers/PortfolioController.php:476
 * @route '/dashboard/portfolio/recommendations'
 */
recommendationsIndex.url = (options?: RouteQueryOptions) => {
    return recommendationsIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::recommendationsIndex
 * @see app/Http/Controllers/PortfolioController.php:476
 * @route '/dashboard/portfolio/recommendations'
 */
recommendationsIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recommendationsIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::recommendationsIndex
 * @see app/Http/Controllers/PortfolioController.php:476
 * @route '/dashboard/portfolio/recommendations'
 */
recommendationsIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: recommendationsIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::recommendationsIndex
 * @see app/Http/Controllers/PortfolioController.php:476
 * @route '/dashboard/portfolio/recommendations'
 */
    const recommendationsIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: recommendationsIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::recommendationsIndex
 * @see app/Http/Controllers/PortfolioController.php:476
 * @route '/dashboard/portfolio/recommendations'
 */
        recommendationsIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: recommendationsIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::recommendationsIndex
 * @see app/Http/Controllers/PortfolioController.php:476
 * @route '/dashboard/portfolio/recommendations'
 */
        recommendationsIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: recommendationsIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    recommendationsIndex.form = recommendationsIndexForm
/**
* @see \App\Http\Controllers\PortfolioController::recommendationsStore
 * @see app/Http/Controllers/PortfolioController.php:490
 * @route '/dashboard/portfolio/recommendations'
 */
export const recommendationsStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: recommendationsStore.url(options),
    method: 'post',
})

recommendationsStore.definition = {
    methods: ["post"],
    url: '/dashboard/portfolio/recommendations',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PortfolioController::recommendationsStore
 * @see app/Http/Controllers/PortfolioController.php:490
 * @route '/dashboard/portfolio/recommendations'
 */
recommendationsStore.url = (options?: RouteQueryOptions) => {
    return recommendationsStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::recommendationsStore
 * @see app/Http/Controllers/PortfolioController.php:490
 * @route '/dashboard/portfolio/recommendations'
 */
recommendationsStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: recommendationsStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PortfolioController::recommendationsStore
 * @see app/Http/Controllers/PortfolioController.php:490
 * @route '/dashboard/portfolio/recommendations'
 */
    const recommendationsStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: recommendationsStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::recommendationsStore
 * @see app/Http/Controllers/PortfolioController.php:490
 * @route '/dashboard/portfolio/recommendations'
 */
        recommendationsStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: recommendationsStore.url(options),
            method: 'post',
        })
    
    recommendationsStore.form = recommendationsStoreForm
/**
* @see \App\Http\Controllers\PortfolioController::recommendationsUpdate
 * @see app/Http/Controllers/PortfolioController.php:502
 * @route '/dashboard/portfolio/recommendations/{recommendation}'
 */
export const recommendationsUpdate = (args: { recommendation: string | number } | [recommendation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: recommendationsUpdate.url(args, options),
    method: 'put',
})

recommendationsUpdate.definition = {
    methods: ["put"],
    url: '/dashboard/portfolio/recommendations/{recommendation}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\PortfolioController::recommendationsUpdate
 * @see app/Http/Controllers/PortfolioController.php:502
 * @route '/dashboard/portfolio/recommendations/{recommendation}'
 */
recommendationsUpdate.url = (args: { recommendation: string | number } | [recommendation: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return recommendationsUpdate.definition.url
            .replace('{recommendation}', parsedArgs.recommendation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::recommendationsUpdate
 * @see app/Http/Controllers/PortfolioController.php:502
 * @route '/dashboard/portfolio/recommendations/{recommendation}'
 */
recommendationsUpdate.put = (args: { recommendation: string | number } | [recommendation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: recommendationsUpdate.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\PortfolioController::recommendationsUpdate
 * @see app/Http/Controllers/PortfolioController.php:502
 * @route '/dashboard/portfolio/recommendations/{recommendation}'
 */
    const recommendationsUpdateForm = (args: { recommendation: string | number } | [recommendation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: recommendationsUpdate.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::recommendationsUpdate
 * @see app/Http/Controllers/PortfolioController.php:502
 * @route '/dashboard/portfolio/recommendations/{recommendation}'
 */
        recommendationsUpdateForm.put = (args: { recommendation: string | number } | [recommendation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: recommendationsUpdate.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    recommendationsUpdate.form = recommendationsUpdateForm
/**
* @see \App\Http\Controllers\PortfolioController::recommendationsDestroy
 * @see app/Http/Controllers/PortfolioController.php:514
 * @route '/dashboard/portfolio/recommendations/{recommendation}'
 */
export const recommendationsDestroy = (args: { recommendation: string | number } | [recommendation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: recommendationsDestroy.url(args, options),
    method: 'delete',
})

recommendationsDestroy.definition = {
    methods: ["delete"],
    url: '/dashboard/portfolio/recommendations/{recommendation}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PortfolioController::recommendationsDestroy
 * @see app/Http/Controllers/PortfolioController.php:514
 * @route '/dashboard/portfolio/recommendations/{recommendation}'
 */
recommendationsDestroy.url = (args: { recommendation: string | number } | [recommendation: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return recommendationsDestroy.definition.url
            .replace('{recommendation}', parsedArgs.recommendation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::recommendationsDestroy
 * @see app/Http/Controllers/PortfolioController.php:514
 * @route '/dashboard/portfolio/recommendations/{recommendation}'
 */
recommendationsDestroy.delete = (args: { recommendation: string | number } | [recommendation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: recommendationsDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PortfolioController::recommendationsDestroy
 * @see app/Http/Controllers/PortfolioController.php:514
 * @route '/dashboard/portfolio/recommendations/{recommendation}'
 */
    const recommendationsDestroyForm = (args: { recommendation: string | number } | [recommendation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: recommendationsDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::recommendationsDestroy
 * @see app/Http/Controllers/PortfolioController.php:514
 * @route '/dashboard/portfolio/recommendations/{recommendation}'
 */
        recommendationsDestroyForm.delete = (args: { recommendation: string | number } | [recommendation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: recommendationsDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    recommendationsDestroy.form = recommendationsDestroyForm
/**
* @see \App\Http\Controllers\PortfolioController::skillsIndex
 * @see app/Http/Controllers/PortfolioController.php:521
 * @route '/dashboard/portfolio/skills'
 */
export const skillsIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: skillsIndex.url(options),
    method: 'get',
})

skillsIndex.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolio/skills',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::skillsIndex
 * @see app/Http/Controllers/PortfolioController.php:521
 * @route '/dashboard/portfolio/skills'
 */
skillsIndex.url = (options?: RouteQueryOptions) => {
    return skillsIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::skillsIndex
 * @see app/Http/Controllers/PortfolioController.php:521
 * @route '/dashboard/portfolio/skills'
 */
skillsIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: skillsIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::skillsIndex
 * @see app/Http/Controllers/PortfolioController.php:521
 * @route '/dashboard/portfolio/skills'
 */
skillsIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: skillsIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::skillsIndex
 * @see app/Http/Controllers/PortfolioController.php:521
 * @route '/dashboard/portfolio/skills'
 */
    const skillsIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: skillsIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::skillsIndex
 * @see app/Http/Controllers/PortfolioController.php:521
 * @route '/dashboard/portfolio/skills'
 */
        skillsIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: skillsIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::skillsIndex
 * @see app/Http/Controllers/PortfolioController.php:521
 * @route '/dashboard/portfolio/skills'
 */
        skillsIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: skillsIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    skillsIndex.form = skillsIndexForm
/**
* @see \App\Http\Controllers\PortfolioController::skillsStore
 * @see app/Http/Controllers/PortfolioController.php:534
 * @route '/dashboard/portfolio/skills'
 */
export const skillsStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: skillsStore.url(options),
    method: 'post',
})

skillsStore.definition = {
    methods: ["post"],
    url: '/dashboard/portfolio/skills',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PortfolioController::skillsStore
 * @see app/Http/Controllers/PortfolioController.php:534
 * @route '/dashboard/portfolio/skills'
 */
skillsStore.url = (options?: RouteQueryOptions) => {
    return skillsStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::skillsStore
 * @see app/Http/Controllers/PortfolioController.php:534
 * @route '/dashboard/portfolio/skills'
 */
skillsStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: skillsStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PortfolioController::skillsStore
 * @see app/Http/Controllers/PortfolioController.php:534
 * @route '/dashboard/portfolio/skills'
 */
    const skillsStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: skillsStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::skillsStore
 * @see app/Http/Controllers/PortfolioController.php:534
 * @route '/dashboard/portfolio/skills'
 */
        skillsStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: skillsStore.url(options),
            method: 'post',
        })
    
    skillsStore.form = skillsStoreForm
/**
* @see \App\Http\Controllers\PortfolioController::skillsDestroy
 * @see app/Http/Controllers/PortfolioController.php:546
 * @route '/dashboard/portfolio/skills/{skill}'
 */
export const skillsDestroy = (args: { skill: string | number } | [skill: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: skillsDestroy.url(args, options),
    method: 'delete',
})

skillsDestroy.definition = {
    methods: ["delete"],
    url: '/dashboard/portfolio/skills/{skill}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PortfolioController::skillsDestroy
 * @see app/Http/Controllers/PortfolioController.php:546
 * @route '/dashboard/portfolio/skills/{skill}'
 */
skillsDestroy.url = (args: { skill: string | number } | [skill: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { skill: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    skill: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        skill: args.skill,
                }

    return skillsDestroy.definition.url
            .replace('{skill}', parsedArgs.skill.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::skillsDestroy
 * @see app/Http/Controllers/PortfolioController.php:546
 * @route '/dashboard/portfolio/skills/{skill}'
 */
skillsDestroy.delete = (args: { skill: string | number } | [skill: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: skillsDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PortfolioController::skillsDestroy
 * @see app/Http/Controllers/PortfolioController.php:546
 * @route '/dashboard/portfolio/skills/{skill}'
 */
    const skillsDestroyForm = (args: { skill: string | number } | [skill: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: skillsDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::skillsDestroy
 * @see app/Http/Controllers/PortfolioController.php:546
 * @route '/dashboard/portfolio/skills/{skill}'
 */
        skillsDestroyForm.delete = (args: { skill: string | number } | [skill: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: skillsDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    skillsDestroy.form = skillsDestroyForm
const PortfolioController = { editProfile, updateProfile, editSectionAbout, updateSectionAbout, editSectionBeyondScreen, updateSectionBeyondScreen, editSectionContactIntro, updateSectionContactIntro, editEducation, updateEducation, editContactCta, updateContactCta, experiencesIndex, experiencesStore, experiencesUpdate, experiencesDestroy, projectsIndex, projectsStore, projectsUpdate, projectsDestroy, certificationsIndex, certificationsStore, certificationsUpdate, certificationsDestroy, recommendationsIndex, recommendationsStore, recommendationsUpdate, recommendationsDestroy, skillsIndex, skillsStore, skillsDestroy }

export default PortfolioController