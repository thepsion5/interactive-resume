export const SHOW_SKILLSETS = 'skillsets.show';
export const HIDE_SKILLSETS = 'skillsets.hide';

export function showSkillsets()
{
	return {
		type: SHOW_SKILLSETS
	};
}

export function hideSkillsets()
{
	return {
		type: HIDE_SKILLSETS
	};
}

