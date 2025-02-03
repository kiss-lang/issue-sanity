
            browser.runtime.sendMessage({type: 'checklistSourceBg', data: [${tab.id}, ${tab.url}, checklists[0].outerHTML]});