'use client'

import Script from 'next/script'

export function KeystaticSortScript() {
  return (
    <Script id="keystatic-custom-ui" strategy="lazyOnload">{`
      (function() {
        // --- Sort posts by Publish Date descending ---
        function sortByDateDesc() {
          var headers = document.querySelectorAll('[role="columnheader"]');
          for (var i = 0; i < headers.length; i++) {
            if (headers[i].textContent.trim() === 'Publish Date') {
              var ariaSort = headers[i].getAttribute('aria-sort');
              if (ariaSort === 'descending') return;
              headers[i].click();
              if (ariaSort === 'ascending') return;
              setTimeout(function() { headers[i].click(); }, 150);
              return;
            }
          }
        }

        // --- Style status badges in collection list ---
        function styleStatusBadges() {
          var path = window.location.pathname;
          if (!path.endsWith('/posts') && !path.endsWith('/posts/')) return;

          // Find the Status column index
          var headers = document.querySelectorAll('[role="columnheader"]');
          var statusIdx = -1;
          for (var i = 0; i < headers.length; i++) {
            if (headers[i].textContent.trim() === 'Status') {
              statusIdx = i;
              break;
            }
          }
          if (statusIdx === -1) return;

          var rows = document.querySelectorAll('[role="row"]');
          for (var r = 0; r < rows.length; r++) {
            var cells = rows[r].querySelectorAll('[role="gridcell"], [role="rowheader"]');
            var cell = cells[statusIdx];
            if (!cell) continue;
            if (cell.getAttribute('data-badge-styled')) continue;

            var textEl = cell.querySelector('span');
            if (!textEl) continue;

            var val = textEl.textContent.trim().toLowerCase();
            if (val !== 'draft' && val !== 'published') continue;

            cell.setAttribute('data-badge-styled', 'true');

            var badge = document.createElement('span');
            if (val === 'published') {
              badge.textContent = 'Published';
              badge.style.cssText = 'display:inline-flex;align-items:center;gap:5px;background:#ecfdf5;color:#059669;font-size:12px;font-weight:600;padding:3px 10px;border-radius:9999px;letter-spacing:0.01em;';
              badge.innerHTML = '<span style="width:6px;height:6px;border-radius:50%;background:#059669;flex-shrink:0;"></span>Published';
            } else {
              badge.textContent = 'Draft';
              badge.style.cssText = 'display:inline-flex;align-items:center;gap:5px;background:#fef3c7;color:#d97706;font-size:12px;font-weight:600;padding:3px 10px;border-radius:9999px;letter-spacing:0.01em;';
              badge.innerHTML = '<span style="width:6px;height:6px;border-radius:50%;background:#d97706;flex-shrink:0;"></span>Draft';
            }

            textEl.replaceWith(badge);
          }
        }

        // --- Replace Save/Create button with Draft + Publish ---
        function setStatusAndSubmit(targetValue) {
          // Find the Status picker by its label
          var labels = document.querySelectorAll('label, [data-testid], span');
          var picker = null;
          for (var i = 0; i < labels.length; i++) {
            if (labels[i].textContent.trim() === 'Status') {
              // The picker button is a sibling or nearby element
              var container = labels[i].closest('[data-field]') || labels[i].parentElement;
              if (container) {
                picker = container.querySelector('button[role="button"], button');
              }
              break;
            }
          }

          if (picker) {
            // Check if already set to desired value
            var currentValue = picker.textContent.trim().toLowerCase();
            if (currentValue === targetValue) {
              // Already correct, just submit
              submitForm();
              return;
            }
            // Click the picker to open dropdown
            picker.click();
            setTimeout(function() {
              var options = document.querySelectorAll('[role="option"]');
              for (var j = 0; j < options.length; j++) {
                if (options[j].textContent.trim().toLowerCase() === targetValue) {
                  options[j].click();
                  setTimeout(submitForm, 100);
                  return;
                }
              }
              // Fallback: submit anyway
              submitForm();
            }, 200);
          } else {
            submitForm();
          }
        }

        function submitForm() {
          var form = document.querySelector('form');
          if (form) {
            form.requestSubmit();
          }
        }

        function createButton(text, prominence, onClick) {
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.textContent = text;
          btn.onclick = onClick;
          btn.setAttribute('data-custom-action', 'true');
          if (prominence === 'high') {
            btn.style.cssText = 'background:#0d6efd;color:#fff;border:none;padding:6px 16px;border-radius:6px;font-size:14px;font-weight:600;cursor:pointer;white-space:nowrap;';
          } else {
            btn.style.cssText = 'background:transparent;color:#0d6efd;border:1px solid #0d6efd;padding:6px 16px;border-radius:6px;font-size:14px;font-weight:600;cursor:pointer;white-space:nowrap;';
          }
          return btn;
        }

        function replaceButtons() {
          var path = window.location.pathname;
          if (!path.includes('/keystatic/collection/posts/')) return;
          // Skip the list page
          if (path.endsWith('/posts') || path.endsWith('/posts/')) return;

          // Find the original save/create button
          var buttons = document.querySelectorAll('button[type="submit"]');
          var saveBtn = null;
          for (var i = 0; i < buttons.length; i++) {
            var txt = buttons[i].textContent.trim().toLowerCase();
            if (txt === 'save' || txt === 'create') {
              saveBtn = buttons[i];
              break;
            }
          }

          if (!saveBtn) return;
          if (saveBtn.getAttribute('data-replaced')) return;
          saveBtn.setAttribute('data-replaced', 'true');
          saveBtn.style.display = 'none';

          var wrapper = document.createElement('div');
          wrapper.style.cssText = 'display:flex;gap:8px;align-items:center;';
          wrapper.setAttribute('data-custom-action', 'true');

          var draftBtn = createButton('Save To Draft', 'low', function(e) {
            e.preventDefault();
            setStatusAndSubmit('draft');
          });
          var publishBtn = createButton('Publish', 'high', function(e) {
            e.preventDefault();
            setStatusAndSubmit('published');
          });

          wrapper.appendChild(draftBtn);
          wrapper.appendChild(publishBtn);
          saveBtn.parentNode.insertBefore(wrapper, saveBtn);
        }

        // --- Watch for SPA navigation ---
        var lastPath = '';
        var observer = new MutationObserver(function() {
          var currentPath = window.location.pathname;
          if (currentPath !== lastPath) {
            lastPath = currentPath;
            if (currentPath.includes('/keystatic/collection/posts')) {
              if (currentPath.endsWith('/posts') || currentPath.endsWith('/posts/')) {
                setTimeout(sortByDateDesc, 500);
              }
            }
          }
          // Style badges on list page
          if (currentPath.includes('/keystatic/collection/posts')) {
            if (currentPath.endsWith('/posts') || currentPath.endsWith('/posts/')) {
              styleStatusBadges();
            }
          }
          // Replace buttons on entry pages
          if (currentPath.includes('/keystatic/collection/posts/')) {
            if (!currentPath.endsWith('/posts') && !currentPath.endsWith('/posts/')) {
              setTimeout(replaceButtons, 300);
            }
          }
        });
        observer.observe(document.body, { childList: true, subtree: true });

        // Initial checks
        var initPath = window.location.pathname;
        if (initPath.includes('/keystatic/collection/posts')) {
          if (initPath.endsWith('/posts') || initPath.endsWith('/posts/')) {
            setTimeout(sortByDateDesc, 500);
            setTimeout(styleStatusBadges, 600);
          } else {
            setTimeout(replaceButtons, 500);
          }
        }
      })();
    `}</Script>
  )
}
