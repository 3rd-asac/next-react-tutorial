import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export const Header_list = () => {
	const list = [
		{ data: '채용' },
		{ data: '이벤트' },
		{ data: '이력서' },
		{ data: '소셜' },
		{ data: '프리랜서' },
		{ data: 'AI 합격예측' },
	];
	return (
		<ul className='flex'>
			{list.map((el, key) => (
				<li
					className='p-4 font-bold text-sm'
					key={key}>
					{el.data}
				</li>
			))}
		</ul>
	);
};

export default function Header() {
	return (
		<header className='border-b-2 border-gray-200'>
			<nav className='max-w-wanted flex justify-between items-center m-auto'>
				<div>
					<div>
						<MenuIcon className='mr-4' />
						<a
							href='#'
							className='font-extrabold text-2xl'>
							wanted
						</a>
					</div>
				</div>
				<Header_list />
				<aside>
					<ul className='flex items-center'>
						<li className='mx-1'>
							<button>
								<SearchIcon />
							</button>
						</li>
						<li className='mx-4 text-sm font-bold'>
							<button>회원가입/로그인</button>
						</li>
						<li className='mx-4 text-xs text-gray-300'>|</li>
						<li className='mx-4'>
							<a
								href='#'
								className='border-2 rounded-3xl border-gray-200 p-2 text-xs font-bold text-gray-400'>
								기업 서비스
							</a>
						</li>
					</ul>
				</aside>
			</nav>
		</header>
	);
}
